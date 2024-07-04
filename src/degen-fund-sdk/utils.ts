import { BN, web3 } from "@coral-xyz/anchor";

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getPubkeyFromStr(key: string) {
  try {
    return new web3.PublicKey(key);
  } catch (pubkeyParseError) {
    return null;
  }
}

export async function getMultipleAccountsInfo(
  connection: web3.Connection,
  pubkeys: web3.PublicKey[],
  opt?: { retry?: boolean; duration?: number }
) {
  opt = opt ?? {};
  opt.retry = opt.retry ?? true;
  opt.duration = opt.duration ?? 2000;
  const { duration, retry } = opt;
  const res = await connection
    .getMultipleAccountsInfo(pubkeys)
    .catch(async () => {
      if (retry) {
        await sleep(duration);
        return await connection
          .getMultipleAccountsInfo(pubkeys)
          .catch((getMultipleAccountsInfoError) => {
            return null;
          });
      }
      return null;
    });
  return res;
}

export const generateRandomSeed = () => {
  const timestamp = Date.now();
  const timestampBigInt = BigInt(timestamp);
  const timestampU64 = timestampBigInt.toString();
  return new BN(timestampU64);
};

export function calcNonDecimalValue(value: number, decimals: number): number {
  return Math.trunc(value * Math.pow(10, decimals));
}

export function calcDecimalValue(value: number, decimals: number): number {
  return value / Math.pow(10, decimals);
}

export const parseUnits = (amount: string | number, decimals: number): BN => {
  const base = new BN(10).pow(new BN(decimals));
  // Split the input to handle decimal amounts correctly
  const parts = amount.toString().split(".");
  let bnAmount = new BN(parts[0]).mul(base);

  if (parts.length > 1) {
    let fraction = parts[1];
    let fractionBase = new BN(10).pow(new BN(fraction.length));
    let fractionAmount = new BN(fraction);
    fractionAmount = fractionAmount.mul(base).div(fractionBase);
    bnAmount = bnAmount.add(fractionAmount);
  }

  return bnAmount;
};

export const formatUnits = (amount: BN, decimals: number): string => {
  const base = new BN(10).pow(new BN(decimals));
  const integer = amount.div(base);
  const fraction = amount.mod(base).toString(10);

  // Properly format the fraction part to remove leading zeroes
  const paddedFraction = fraction.padStart(decimals, "0").replace(/0+$/, "");
  return `${integer.toString(10)}${paddedFraction ? "." + paddedFraction : ""}`;
};
