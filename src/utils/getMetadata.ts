import { PublicKey } from '@solana/web3.js';
import { programs } from '@metaplex/js';

import { degenFundSdk } from '@/shared/degenFundSdk';

const {
  metadata: { Metadata },
} = programs;

export const getMetadata = async (tokenAddress: string): Promise<programs.metadata.MetadataData | undefined> => {
  try {
    const metadataPDA = await Metadata.getPDA(new PublicKey(tokenAddress));
    const tokenMetadata = await Metadata.load(degenFundSdk.connection, metadataPDA);

    return tokenMetadata.data;
  } catch (e) {
    // TODO: Do something which getMetadata error catched
    console.log(e);
    return undefined;
  }
};
