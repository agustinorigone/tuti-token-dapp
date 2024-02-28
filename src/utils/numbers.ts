import { ethers } from "ethers";

export const formatBigNumber = (number: string, decimals: string) => {
  // Convert balance to a BigNumber with ethers library
  const rawNumber = ethers.BigNumber.from(number);

  // Format the balance with ethers utility function
  const formattedNumber: string = ethers.utils.formatUnits(rawNumber, decimals);

  return Number(formattedNumber).toFixed(2);
};
