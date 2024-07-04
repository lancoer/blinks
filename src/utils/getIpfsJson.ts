/** Uses `URL.createObjectURL` free returned ObjectURL with `URL.RevokeObjectURL` when done with it.
 *
 * @param {string} url Ipfs url to get json data
 * @returns Object
 */
export const getIpfsJson = async (url: string): Promise<any> => {
  const response = await fetch(url);

  return await response.json();
};
