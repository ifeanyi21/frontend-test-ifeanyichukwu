export const getTranscations = async () => {
  const response = await fetch("https://fe-task-api.mainstack.io/transactions");
  return response.json();
};

export const getWallet = async () => {
  const response = await fetch("https://fe-task-api.mainstack.io/wallet");
  return response.json();
};
