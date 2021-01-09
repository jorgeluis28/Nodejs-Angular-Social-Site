import { environment } from '../../../environments/environment';
const base_url = environment.baseUrl; // local environment
export const UrlJSON = {
  socketUrl: base_url,
  registerUrl: base_url + 'api/signup',
  loginUrl: base_url + 'api/signin',
  forgotUrl: base_url + 'api/forgot',
  resetUrl: base_url + 'api/reset',
  validCaptchaUrl: base_url + 'api/validCaptchaUrl',
  displayAvatarFromFSUrl: base_url + 'api/displayAvatarFromFS/',
  displayPictureUrl: base_url + 'api/displayPicture/',
  displayPictureFromFSUrl: base_url + 'api/displayPictureFromFS/',
  addItemUrl: base_url + 'api/addItem',
  getItemsUrl: base_url + 'api/getItems',
  getItemsForSearchUrl: base_url + 'api/getItemsForSearch',
  getItemByIdUrl: base_url + 'api/getItemById',
  getDisplayItemByIdUrl: base_url + 'api/getDisplayItemById',
  removeItemsUrl: base_url + 'api/removeItems',
  updateItemUrl: base_url + 'api/updateItem',
  getUserUrl: base_url + 'api/getUsers',
  addUserUrl: base_url + 'api/addUser',
  getUserByIDUrl: base_url + 'api/getUserByID',
  getUserForSearchUrl: base_url + 'api/getUserForSearch',
  updateUserUrl: base_url + 'api/updateUser',
  updateUserbyRegularUrl: base_url + 'api/updateUserbyRegular',
  removeUserUrl: base_url + 'api/removeUser',
  loadFromLocalToDbUrl: base_url + 'api/loadFromLocalToDb',
  createDummyDataUrl: base_url + 'api/createDummyData',
  loadFromLocalBusinessToDbUrl: base_url + 'api/loadFromLocalBusinessToDb',
  createBusinessDummyDataUrl: base_url + 'api/createBusinessDummyData',
  uploadPictureUrl: base_url + 'api/uploadItemPicture',
  uploadPictureToMongoUrl: base_url + 'api/uploadPictureToMongoose',
  makingBusinessUrl: base_url + 'api/makingBusiness',
  addBusinessUrl: base_url + 'api/addBusiness',
  addEventUrl: base_url + 'api/addEvent',
  editEventUrl: base_url + 'api/editEvent',
  deleteEventUrl: base_url + 'api/deleteEvent',
  addBusinessEmployeeUrl: base_url + 'api/addBusinessEmployee',
  addBusinessEventUrl: base_url + 'api/addBusinessEvent',
  addBusinessTransactionUrl: base_url + 'api/addBusinessTransaction',
  addBusinessProductUrl: base_url + 'api/addBusinessProduct',
  deleteBusinessEventUrl: base_url + 'api/deleteBusinessEvent',
  deleteBusinessTransactionUrl: base_url + 'api/deleteBusinessTransaction',
  deleteBusinessProductUrl: base_url + 'api/deleteBusinessProduct',
  getBusinessUrl: base_url + 'api/getBusiness',
  getBusinessByIdUrl: base_url + 'api/getBusinessById',
  getBusinessByBusinessIdUrl: base_url + 'api/getBusinessByBusinessId',
  getBusinessIdByPostIDUrl: base_url + 'api/getBusinessIdByPostID',
  getEventsByBusinessIdUrl: base_url + 'api/getEventsByBusinessId',
  setOfflineStatusByIDUrl: base_url + 'api/setOfflineStatusByID',
  setOnlineStatusByIDUrl: base_url + 'api/setOnlineStatusByID',
  getCompanyInfoUrl: base_url + 'api/getCompanyInfo',
  insertAddPostUrl: base_url + 'api/insertAddPost',
  updatePostUrl: base_url + 'api/updatePost',
  deletePostUrl: base_url + 'api/deletePost',
  favoritePostUrl: base_url + 'api/favoritePost',
  favoritePostDeleteUrl: base_url + 'api/favoriteDelete',
  sendRecommendUrl: base_url + 'api/sendRecommend',
  confirmRecommendUrl: base_url + 'api/confirmRecommend',
  deleteRecommendUrl: base_url + 'api/deleteRecommend',
  addCommentUrl: base_url + 'api/addComment',
  getAllPostsUrl: base_url + 'api/getAllPosts',
  getAllPostsForDatatableUrl: base_url + 'api/getAllPostsForDatatable',
  getPostDataByIdUrl: base_url + 'api/getPostDataById',
  getPostsDataByUserIdUrl: base_url + 'api/getPostsDataByUserId',
  getAllBusinessUrl: base_url + 'api/getAllBusiness',
  uploadPictureToMongoUrl111: base_url + 'api/uploadPictureToMongoose111',
  getBusinessesForSearchUrl: base_url + 'api/getBusinessesForSearch',
  getLogoPictureUrl: base_url + 'api/getLogoPicture',
  getBusinessPerIndexUrl: base_url + 'api/getBusinessPerIndex'
};
