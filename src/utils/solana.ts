export async function fetchBalance(walletAddress: string): Promise<number | null> {
  const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL;
  if (!rpcUrl) {
    console.error('RPC URL not configured');
    return null;
  }

  const payload = {
    jsonrpc: "2.0",
    id: 1,
    method: "getBalance",
    params: [walletAddress, { commitment: "confirmed" }]
  };

  try {
    const response = await fetch(rpcUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const lamports = data.result.value;
    return lamports / 1e9; // Convert lamports to SOL
  } catch (error) {
    console.error("Error fetching balance:", error);
    return null;
  }
} 