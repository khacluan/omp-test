// "use strict";

// function track_outbound(a, b, c, d, e, f) {
//   $.post("/outbound_links", {
//     url: a,
//     domain: b,
//     list_id: c,
//     item_id: d,
//     link_type: e,
//     original_id: f
//   })
// }

// ! function(a, b) {
//   b.mery = b.mery || {}, mery.utils = mery.utils || {}, mery.utils.format = mery.utils.format || {}, mery.utils.format.numberWithDelimiter = function(a) {
//     return a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
//   }, mery.api = mery.api || {}, mery.api.updateImageAction = function(b) {
//     a.post("/image_actions/update", {
//       image_id: b
//     })
//   }, mery.api.updateBrandProductAction = function(b) {
//     a.post("/brand_product_actions/update", {
//       brand_product_id: b
//     })
//   }, mery.api.updateEcProductAction = function(b, c) {
//     a.post("/ec_product_actions/update", {
//       product_id: b,
//       image_id: c
//     })
//   }, mery.api.updateProductAction = function(b) {
//     a.post("/product_actions/update", {
//       product_id: b
//     })
//   }, mery.api.updateShopItemAction = function(b) {
//     a.post("/shop_item_actions/update", {
//       shop_item_id: b
//     })
//   }, mery.api.updateHairSalonAction = function(b) {
//     a.post("/hair_salon_actions/update", {
//       hair_salon_id: b
//     })
//   }, mery.api.updateInstagramPhotoAction = function(b) {
//     a.post("/instagram_photo_actions/update", {
//       instagram_photo_id: b
//     })
//   }, mery.api.updateTweetAction = function(b) {
//     a.post("/tweet_actions/update", {
//       tweet_id: b
//     })
//   }, mery.api.updateHairStyleAction = function(b) {
//     a.post("/hair_style_actions/update", {
//       hair_style_id: b
//     })
//   }, mery.api.updateFoodImageAction = function(b) {
//     a.post("/food_image_actions/update", {
//       food_image_id: b
//     })
//   }, mery.api.updateRestaurantAction = function(b) {
//     a.post("/restaurant_actions/update", {
//       restaurant_id: b
//     })
//   }
// }(jQuery, window, document)

// jQuery(function(a) {
//   a("input[placeholder], textarea[placeholder]").placeholder(), a("img").each(function() {
//     a(this).on("contextmenu", function(a) {
//       a.preventDefault()
//     }), a(this).on("dragstart", function(a) {
//       a.preventDefault()
//     })
//   }), a("img").imagesLoaded().progress(function(b, c) {
//     if (!c.isLoaded) {
//       var d = a(c.img);
//       d.hasClass("insta_icon") ? d.replaceWith('<span class="default-image insta-icon">') : d.hasClass("insta_photo") ? d.parent().parent().remove() : d.hasClass("tweet_icon") ? d.replaceWith('<span class="default-image tweet-icon">') : d.hasClass("tweet_image") && d.parent().remove()
//     }
//   });
//   for (var b = a(".articleArea img.article_img"), c = a("div.article_image"), d = 0; d < b.length; d++) {
//     var e = new Image;
//     e.src = b[d].src, e.width < 500 && (a(b[d]).css("max-width", "310px"), a(c[d]).css({
//       "float": "left"
//     }))
//   }
//   a(".x-article-image").on("error", function() {
//     var b = a(this),
//     c = b.attr("src"),
//     d = b.parents(".article_content");
//     d.length <= 0 && (d = b.parents(".x-content-area"));
//     var e = a(d).data("item-id"),
//     f = a(d).data("item-type"),
//     g = a(".articleArea").data("list-id");
//     g || (g = a(".content_area").data("list-id")), a.ajax({
//       url: "/api/registration_not_found_images",
//       method: "POST",
//       dataType: "json",
//       data: {
//         image_url: c,
//         list_id: g,
//         resource_id: e,
//         reference_type: f
//       }
//     }).done(function() {
//       a(d).remove()
//     })
//   }), a(".x-article-image").each(function() {
//     this.src = this.src
//   }), a(".x-image-resize").each(function() {
//     var b = a(this),
//     c = new Image;
//     c.onload = function() {
//       var a = b.attr("width"),
//       c = b.attr("height");
//       b.removeClass("x-image-resize"), b.within({
//         width: a,
//         height: c
//       })
//     }, c.onerror = function() {
//       var c = b.attr("width"),
//       d = b.attr("height");
//       b.removeClass("x-image-resize"), b.within({
//         width: c,
//         height: d
//       });
//       var e = b.attr("src"),
//       f = b.parent().data("list-id");
//       a.ajax({
//         url: "/api/registration_not_found_images",
//         method: "POST",
//         dataType: "json",
//         data: {
//           image_url: e,
//           list_id: f,
//           resource_id: f,
//           reference_type: "List"
//         }
//       })
//     }, c.src = a(this).attr("src")
//   }), HandlebarsIntl.registerWith(Handlebars)
// });