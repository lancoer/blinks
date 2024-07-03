import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { programs } from '@metaplex/js';

const {
  metadata: { Metadata },
} = programs;

const connection = new Connection(clusterApiUrl('mainnet-beta'), 'finalized');

export const getMetadata = async (tokenAddress: string): Promise<programs.metadata.MetadataData | undefined> => {
  try {
    const metadataPDA = await Metadata.getPDA(new PublicKey(tokenAddress));
    const tokenMetadata = await Metadata.load(connection, metadataPDA);

    return tokenMetadata.data;
  } catch (e) {
    // TODO: Do something which getMetadata error catched
    console.log(e);
    return undefined;
  }
};
