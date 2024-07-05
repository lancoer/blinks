/** Replace ipfs scheme with public ipfs gateway
 *
 * @param {string} url Original ipfs url
 * @returns string
 */
export const changeIpfsScheme = (url: string): string => {
  return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
};
