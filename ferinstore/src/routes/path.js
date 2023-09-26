const JOIN = (root, sublink) => {
  return `${root}/${sublink}`;
};
const ROOT_DETAILS = "/details"
export const PATH_PAGE = {
  home: "/",
};
export const PATH_DETAILS =(product)=> {
  return{ details : JOIN(ROOT_DETAILS, product.id)}
}
