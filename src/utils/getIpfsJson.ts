/** Uses `URL.createObjectURL` free returned ObjectURL with `URL.RevokeObjectURL` when done with it.
 *
 * @param {string} url Ipfs url to get json data
 * @returns Object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getIpfsJson = async (url: string): Promise<any> => {
  const response = await fetch(url);

  return await response.json();
};
