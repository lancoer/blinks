import { PublicKey } from '@solana/web3.js';
import { TokenMetadata } from '@solana/spl-token-metadata';
import { getTokenMetadata, TOKEN_2022_PROGRAM_ID } from '@solana/spl-token';
import { degenFundSdk } from '@/shared/degenFundSdk';
import { publicKey } from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { fetchMetadata, findMetadataPda, Metadata } from '@metaplex-foundation/mpl-token-metadata';

const umi = createUmi(degenFundSdk.connection);

export const getMetadata = async (tokenAddress: string): Promise<{ tokenMetadata: TokenMetadata | Metadata | null; tokenOwner: PublicKey }> => {
  const tokenOwner = (await degenFundSdk.connection.getAccountInfo(new PublicKey(tokenAddress)))?.owner;

  if (tokenOwner == null) return { tokenMetadata: null, tokenOwner: PublicKey.default };

  try {
    if (tokenOwner.equals(TOKEN_2022_PROGRAM_ID)) {
      const tokenMetadata = await getTokenMetadata(degenFundSdk.connection, new PublicKey(tokenAddress), 'confirmed', TOKEN_2022_PROGRAM_ID);

      return { tokenMetadata, tokenOwner };
    }

    const metadataPda = findMetadataPda(umi, { mint: publicKey(tokenAddress) });
    const tokenMetadata = await fetchMetadata(umi, publicKey(metadataPda));

    return { tokenMetadata, tokenOwner };
  } catch (e) {
    // TODO: Do something which getMetadata error catched
    console.log(e);
    return { tokenMetadata: null, tokenOwner };
  }
};
