export const CDN_URL = `${process.env.REACT_APP_ASSET_URL}upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

export const LOGO_URL = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

export const MEDIA_ASSETS_SWIGGY= `${process.env.REACT_APP_ASSET_URL}image/upload/`;

export const RESTATURANT_DISH_IMAGE = `${process.env.REACT_APP_ASSET_URL}image/upload/`;

export const LIVE_URL_OF_SWIGGY = `${process.env.REACT_APP_BASE_URL}dapi/restaurants/list/v5?lat=23.027892&lng=72.506543&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;


export const RESTAURANT_MENU =`${process.env.REACT_APP_BASE_URL}dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1956953&lng=72.8083552&restaurantId=`
// shimmer card unit
export const shimmer_card_unit = 20;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 10;

// Github Authorization Token
export const options = {
    method: "GET",
    headers: {
      Authorization: "",
    },
  };

// menu items api card type key
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

export const RESTAURANT_ITEM_CATEGORY_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";