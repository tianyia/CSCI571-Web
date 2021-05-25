(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\xalj1\Desktop\CSCI 571\hw8\project\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "2b62":
/*!*****************************************************************!*\
  !*** ./src/app/components/cast-pop-up/cast-pop-up.component.ts ***!
  \*****************************************************************/
/*! exports provided: CastPopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastPopUpComponent", function() { return CastPopUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CastPopUpComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", ctx_r0.cast_detail_data["birthday"], "");
} }
function CastPopUpComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r1.cast_detail_data["place_of_birth"], "");
} }
function CastPopUpComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r2.gender, "");
} }
function CastPopUpComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r3.cast_detail_data["homepage"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.cast_detail_data["homepage"]);
} }
function CastPopUpComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", ctx_r4.cast_detail_data["known_for_department"], "");
} }
function CastPopUpComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also known as: ", ctx_r5.cast_detail_data["also_known_as"], "");
} }
function CastPopUpComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://imdb.com/name/", ctx_r6.cast_detail_data["imdb_id"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastPopUpComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://instagram.com/", ctx_r7.cast_detail_data["instagram_id"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastPopUpComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/", ctx_r8.cast_detail_data["facebook_id"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastPopUpComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://twitter.com/", ctx_r9.cast_detail_data["twitter_id"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastPopUpComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.cast_detail_data["biography"]);
} }
class CastPopUpComponent {
    constructor(activeModal, PostsService) {
        this.activeModal = activeModal;
        this.PostsService = PostsService;
    }
    get_cast_detail() {
        this.PostsService.get_cast_detail(this.cast_data.id).subscribe(res => {
            this.cast_detail_data = res;
            if (this.cast_detail_data['gender'] == "1") {
                this.gender = "Female";
            }
            else {
                this.gender = "Male";
            }
            //console.log(res)
        });
    }
    ngOnInit() {
        this.get_cast_detail();
        // alert(this.cast_data.name);
    }
}
CastPopUpComponent.ɵfac = function CastPopUpComponent_Factory(t) { return new (t || CastPopUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
CastPopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CastPopUpComponent, selectors: [["app-cast-pop-up"]], inputs: { cast_data: "cast_data" }, decls: 24, vars: 13, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "image_container"], [3, "src"], [1, "text_box1"], [4, "ngIf"], ["class", "link_button", "target", "_blank", 3, "href", 4, "ngIf"], [1, "text_box2", 2, "clear", "both"], ["target", "_blank", 3, "href"], ["target", "_blank", 1, "link_button", 3, "href"], ["ngbPopover", "Visit IMDB", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-imdb", 2, "color", "#e8b42c", "font-size", "5vh", "margin-left", "1vh"], ["ngbPopover", "Visit Instagram", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-instagram", 2, "color", "#800080", "font-size", "5vh", "margin-left", "1vh"], ["ngbPopover", "Visit Facebook", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-facebook-square", 2, "color", "#0804fc", "font-size", "5vh", "margin-left", "1vh"], ["ngbPopover", "Visit Twitter", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-twitter", 2, "color", "#506cf4", "font-size", "5vh", "margin-left", "1vh"]], template: function CastPopUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CastPopUpComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CastPopUpComponent_p_10_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CastPopUpComponent_p_11_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CastPopUpComponent_p_12_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CastPopUpComponent_p_13_Template, 4, 2, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CastPopUpComponent_p_14_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CastPopUpComponent_p_15_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CastPopUpComponent_a_16_Template, 2, 1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CastPopUpComponent_a_17_Template, 2, 1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CastPopUpComponent_a_18_Template, 2, 1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CastPopUpComponent_a_19_Template, 2, 1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Biography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CastPopUpComponent_p_23_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cast_detail_data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + ctx.cast_data["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast_detail_data["birthday"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast_detail_data["place_of_birth"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast_detail_data["gender"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast_detail_data["homepage"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast_detail_data["known_for_department"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast_detail_data["also_known_as"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast_detail_data["imdb_id"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast_detail_data["instagram_id"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast_detail_data["facebook_id"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast_detail_data["twitter_id"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast_detail_data["biography"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"]], styles: [".image_container[_ngcontent-%COMP%]\r\n{\r\n  width:30%;\r\n}\r\nimg[_ngcontent-%COMP%]\r\n{\r\n  float:left;\r\n  width:100%;\r\n}\r\n.text_box1[_ngcontent-%COMP%]\r\n{\r\n  float:left;\r\n  width:65%;\r\n  margin-left:2%;\r\n}\r\n.my-custom-class[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after {\r\n  margin-bottom:1vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc3QtcG9wLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsU0FBUztBQUNYO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBOztFQUVFLFVBQVU7RUFDVixTQUFTO0VBQ1QsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImNhc3QtcG9wLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VfY29udGFpbmVyXHJcbntcclxuICB3aWR0aDozMCU7XHJcbn1cclxuaW1nXHJcbntcclxuICBmbG9hdDpsZWZ0O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLnRleHRfYm94MVxyXG57XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDo2NSU7XHJcbiAgbWFyZ2luLWxlZnQ6MiU7XHJcbn1cclxuLm15LWN1c3RvbS1jbGFzcyAuYXJyb3c6OmFmdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOjF2aDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "4zRL":
/*!*****************************************************************************!*\
  !*** ./src/app/components/movie-detail-page/movie-detail-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MovieDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailPageComponent", function() { return MovieDetailPageComponent; });
/* harmony import */ var _cast_pop_up_cast_pop_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cast-pop-up/cast-pop-up.component */ "2b62");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../carousel/carousel.component */ "qUJ1");










function MovieDetailPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "youtube-player", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("videoId", ctx_r0.trailer_key)("startSeconds", 0);
} }
function MovieDetailPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "youtube-player", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("videoId", ctx_r1.trailer_key)("startSeconds", 0);
} }
function MovieDetailPageComponent_br_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function MovieDetailPageComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Genres:\u00A0\u00A0", ctx_r3.detail_data["detail"]["genres"], "");
} }
function MovieDetailPageComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Spoken Languages:\u00A0\u00A0", ctx_r4.detail_data["detail"]["spoken_languages"], "");
} }
function MovieDetailPageComponent_ngb_alert_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function MovieDetailPageComponent_ngb_alert_19_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.alert_text = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r5.alert_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.alert_text);
} }
function MovieDetailPageComponent_br_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function MovieDetailPageComponent_h5_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MovieDetailPageComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailPageComponent_div_36_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const item_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.open_Modal(item_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + item_r18["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r18["character"], " ");
} }
function MovieDetailPageComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieDetailPageComponent_div_36_div_1_Template, 11, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.detail_data["cast"]);
} }
function MovieDetailPageComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailPageComponent_div_37_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const item_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.open_Modal(item_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + item_r22["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22["character"]);
} }
function MovieDetailPageComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieDetailPageComponent_div_37_div_1_Template, 12, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.detail_data["cast"]);
} }
function MovieDetailPageComponent_br_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function MovieDetailPageComponent_h3_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Reviews\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.detail_data["review"].length);
} }
function MovieDetailPageComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Read the rest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", review_r25["avatar_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("A review created by ", review_r25["author"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2605\u00A0", review_r25["rating"] ? review_r25["rating"] : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Written by ", review_r25["author"], " on ", review_r25["created_at"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](review_r25["content"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", review_r25["url"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailPageComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-carousel", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected_data", ctx_r13.detail_data["recommend"]);
} }
function MovieDetailPageComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-carousel", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected_data", ctx_r14.detail_data["similar"]);
} }
class MovieDetailPageComponent {
    constructor(route, PostsService, modalService, breakpointObserver) {
        this.route = route;
        this.PostsService = PostsService;
        this.modalService = modalService;
        this.breakpointObserver = breakpointObserver;
        this.button_text = "Add to watchlist";
        this.alert_type = "success";
        this.alert_text = "";
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait
        ]).subscribe(result => {
            if (result.matches) {
                this.mobile_version = true;
            }
            else {
                this.mobile_version = false;
            }
        });
    }
    get_detail() {
        this.PostsService.get_movie_detail(this.id).subscribe(res => {
            this.detail_data = res;
            if (this.detail_data['trailer'] && this.detail_data['trailer']['key']) {
                this.trailer_key = this.detail_data['trailer']['key'];
            }
            else {
                this.trailer_key = "tzkWB85ULJY";
            }
            //console.log(res)
            //use local storage to store data for continue watching
            var continue_watching = JSON.parse(localStorage.getItem("continue") || "[]");
            var ind = continue_watching.map(function (object) { return object.id; }).indexOf(this.detail_data['detail']['id']);
            if (ind != -1) {
                continue_watching.splice(ind, 1);
            }
            continue_watching.unshift(this.detail_data['detail']);
            if (continue_watching.length > 24) {
                continue_watching.splice(24, continue_watching.length - 24);
            }
            localStorage.setItem("continue", JSON.stringify(continue_watching));
            //localStorage.clear();
            //watchlist
            var watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
            var ind = watchlist.map(function (object) { return object.id; }).indexOf(this.detail_data['detail']['id']);
            if (ind != -1) {
                this.button_text = "Remove from watchlist";
            }
        });
    }
    button_click() {
        if (this.button_text == "Add to watchlist") {
            this.button_text = "Remove from watchlist";
            this.alert_type = "success";
            this.alert_text = "Added to watchlist";
            var watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
            watchlist.unshift(this.detail_data['detail']);
            localStorage.setItem("watchlist", JSON.stringify(watchlist));
        }
        else {
            this.button_text = "Add to watchlist";
            this.alert_type = "danger";
            this.alert_text = "Removed from watchlist";
            var watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
            var ind = watchlist.map(function (object) { return object.id; }).indexOf(this.detail_data['detail']['id']);
            watchlist.splice(ind, 1);
            localStorage.setItem("watchlist", JSON.stringify(watchlist));
        }
        setTimeout(() => { this.alert_text = ""; }, 5000);
    }
    open_Modal(cast_data) {
        const modalRef = this.modalService.open(_cast_pop_up_cast_pop_up_component__WEBPACK_IMPORTED_MODULE_0__["CastPopUpComponent"], { size: 'lg' });
        modalRef.componentInstance.cast_data = cast_data;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.button_text = "Add to watchlist";
            this.alert_type = "success";
            this.alert_text = "";
            this.id = this.route.snapshot.paramMap.get('id');
            this.get_detail();
            window.scrollTo(0, 0);
        });
    }
}
MovieDetailPageComponent.ɵfac = function MovieDetailPageComponent_Factory(t) { return new (t || MovieDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MovieDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MovieDetailPageComponent, selectors: [["app-movie-detail-page"]], decls: 45, vars: 25, consts: [[1, "detail_container"], [2, "width", "80vw", "margin-bottom", "5vh"], ["class", "embed-responsive embed-responsive-16by9", "style", "width:65%;min-width:300px;float:left;margin-right:1vw;", 4, "ngIf"], ["class", "embed-responsive embed-responsive-16by9", "style", "width:100%;float:left;margin-right:1vw;margin-bottom:5vh;", 4, "ngIf"], [1, "text1"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", "mr-2", 2, "color", "white", "background-color", "#007bfb", 3, "click"], [3, "type", "closed", 4, "ngIf"], [1, "text2", 2, "position", "relative", "clear", "both"], [2, "color", "lightgray"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fab", "fa-twitter", 2, "color", "#506cf4", "font-size", "5vh"], ["data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button_count", "data-size", "small", 1, "fb-share-button", 2, "display", "inline", "position", "absolute", "margin-left", "-1vh", "margin-bottom", "1vh"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href"], [1, "fab", "fa-facebook-square", 2, "color", "#0804fc", "font-size", "5vh", "margin-left", "2vh"], [1, "cast"], ["class", "scroll", 4, "ngIf"], [1, "review"], ["style", "color:white;", 4, "ngIf"], ["class", "review_box", 4, "ngFor", "ngForOf"], [1, "embed-responsive", "embed-responsive-16by9", 2, "width", "65%", "min-width", "300px", "float", "left", "margin-right", "1vw"], ["suggestedQuality", "highres", 3, "videoId", "startSeconds"], [1, "embed-responsive", "embed-responsive-16by9", 2, "width", "100%", "float", "left", "margin-right", "1vw", "margin-bottom", "5vh"], [3, "type", "closed"], [1, "scroll"], ["class", "col-sm-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-2", 3, "click"], [1, "card", 2, "border", "none", "cursor", "pointer"], ["alt", "Card image", 1, "card-img", 3, "src"], [1, "card-text"], [2, "font-weight", "bold"], ["class", "col-sm-2", "style", "width:45%;", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-2", 2, "width", "45%", 3, "click"], [2, "font-weight", "bold", "font-size", "1vw"], [2, "font-size", "1vw"], [2, "color", "white"], [1, "review_box"], [1, "review_image"], [2, "width", "5vw", "height", "5vw", "border-radius", "50%", 3, "src"], [1, "review_text"], [1, "star"], [2, "color", "gray"], [1, "review_content"], ["target", "_blank", 1, "review_link", 3, "href"], [1, "description"], [3, "selected_data"]], template: function MovieDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MovieDetailPageComponent_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MovieDetailPageComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MovieDetailPageComponent_br_7_Template, 1, 0, "br", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MovieDetailPageComponent_p_14_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MovieDetailPageComponent_p_15_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailPageComponent_Template_button_click_17_listener() { return ctx.button_click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MovieDetailPageComponent_ngb_alert_19_Template, 2, 2, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, MovieDetailPageComponent_br_21_Template, 1, 0, "br", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, MovieDetailPageComponent_h5_22_Template, 2, 0, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Full Cast and Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, MovieDetailPageComponent_div_36_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, MovieDetailPageComponent_div_37_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, MovieDetailPageComponent_br_39_Template, 1, 0, "br", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, MovieDetailPageComponent_h3_40_Template, 4, 1, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, MovieDetailPageComponent_div_41_Template, 16, 7, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, MovieDetailPageComponent_div_43_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, MovieDetailPageComponent_div_44_Template, 4, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail_data["detail"]["title"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["detail"]["tagline"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail_data["detail"]["tagline"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx.detail_data["detail"]["release_date"].slice(0, 4), "\u00A0\u00A0|\u00A0\u00A0\u2605", ctx.detail_data["detail"]["vote_average"], " \u00A0\u00A0|\u00A0\u00A0", ctx.detail_data["detail"]["runtime"], "mins ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["detail"]["genres"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["detail"]["spoken_languages"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.button_text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alert_text);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["detail"]["overview"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["detail"]["overview"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail_data["detail"]["overview"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch%20", ctx.detail_data["detail"]["title"], "%0D%0Ahttps://youtu.be/", ctx.trailer_key, "%0D%0A%23USC%20%23CSCI571%20%23FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://youtu.be/", ctx.trailer_key, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["review"].length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["review"].length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.detail_data["review"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["recommend"].length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["similar"].length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlert"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"]], styles: [".detail_container[_ngcontent-%COMP%]\r\n{\r\n  position:relative;\r\n  margin-left:10vw;\r\n  width:80vw;\r\n}\r\n.text1[_ngcontent-%COMP%]\r\n{\r\n  float:left;\r\n  color:white;\r\n  width:32%;\r\n  min-width:250px;\r\n  font-size:1.2vw;\r\n}\r\n.text2[_ngcontent-%COMP%]\r\n{\r\n  color:white;\r\n  width: 80vw;\r\n  font-size:1.2vw;\r\n  margin-bottom:5vh;\r\n}\r\n.cast[_ngcontent-%COMP%]\r\n{\r\n  color:white;\r\n}\r\n.scroll[_ngcontent-%COMP%]\r\n{\r\n  overflow: auto;\r\n  white-space: nowrap;\r\n  width:80vw;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar\r\n{\r\n  height:1vh;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: transparent;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n  border-radius: 0.5vh;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n[_nghost-%COMP%]     .col-sm-2\r\n{\r\n  display: inline-block;\r\n}\r\n[_nghost-%COMP%]     .card\r\n{\r\n  max-width: 100%;\r\n}\r\n[_nghost-%COMP%]     .card-text\r\n{\r\n  display:block;\r\n  color:black;\r\n  text-align: center;\r\n  font-size: 0.5vw;\r\n  white-space: normal;\r\n  overflow-wrap: break-word;\r\n  \r\n}\r\n.review_box[_ngcontent-%COMP%]\r\n{\r\n  position:relative;\r\n  width:80vw;\r\n  background-color: white;\r\n  margin-bottom:2vh;\r\n  border-radius: 2vw;\r\n}\r\n.review_image[_ngcontent-%COMP%]\r\n{\r\n  width:5vw;\r\n  margin-left:2vw;\r\n  padding-top:2vh;\r\n}\r\n.review_text[_ngcontent-%COMP%]\r\n{\r\n  margin-top:-6%;\r\n  margin-left:15%;\r\n  width:64vw;\r\n}\r\n.star[_ngcontent-%COMP%]\r\n{\r\n  display:inline;\r\n  background-color: black;\r\n  color:white;\r\n  border-radius: 1vw;\r\n  padding-top: 0.5vh;\r\n  padding-bottom: 0.5vh;\r\n  padding-left: 1vw;\r\n  padding-right: 1vw;\r\n  margin-left:1vw;\r\n}\r\n.review_content[_ngcontent-%COMP%]\r\n{\r\n  top:40%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3; \r\n  -webkit-box-orient: vertical;\r\n}\r\n.review_link[_ngcontent-%COMP%]:visited\r\n{\r\n  color:#744799;\r\n  text-decoration: underline;\r\n}\r\n.description[_ngcontent-%COMP%]\r\n{\r\n  color:white;\r\n  font-size: 4vh;\r\n  margin-left:10%;\r\n}\r\napp-carousel[_ngcontent-%COMP%]\r\n{\r\n  margin-left:-50%;\r\n}\r\n[_nghost-%COMP%]     .carousel-indicators\r\n{\r\n  margin-bottom:-3%\r\n}\r\n[_nghost-%COMP%]     .carousel-control-prev\r\n{\r\n  margin-left:-7%;\r\n  width:3vh;\r\n}\r\n[_nghost-%COMP%]     .carousel-control-next\r\n{\r\n  margin-right:-7%;\r\n  width:3vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFdBQVc7QUFDYjtBQUNBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qjs7K0NBRTZDO0FBQy9DO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsT0FBTztFQUNQLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHFCQUFxQixFQUFFLDRCQUE0QjtFQUNuRCw0QkFBNEI7QUFDOUI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsU0FBUztBQUNYIiwiZmlsZSI6Im1vdmllLWRldGFpbC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsX2NvbnRhaW5lclxyXG57XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6MTB2dztcclxuICB3aWR0aDo4MHZ3O1xyXG59XHJcbi50ZXh0MVxyXG57XHJcbiAgZmxvYXQ6bGVmdDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB3aWR0aDozMiU7XHJcbiAgbWluLXdpZHRoOjI1MHB4O1xyXG4gIGZvbnQtc2l6ZToxLjJ2dztcclxufVxyXG4udGV4dDJcclxue1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGZvbnQtc2l6ZToxLjJ2dztcclxuICBtYXJnaW4tYm90dG9tOjV2aDtcclxufVxyXG4uY2FzdFxyXG57XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuLnNjcm9sbFxyXG57XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDo4MHZ3O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXJcclxue1xyXG4gIGhlaWdodDoxdmg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzg4ODtcclxuICBib3JkZXItcmFkaXVzOiAwLjV2aDtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuY29sLXNtLTJcclxue1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcmRcclxue1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQtdGV4dFxyXG57XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBjb2xvcjpibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjV2dztcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgLyogLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXRcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIEZpcmVmb3gsIG90aGVyIEdlY2tvXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgICAgICBPcGVyYS9JRSA4KyAqL1xyXG59XHJcbi5yZXZpZXdfYm94XHJcbntcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB3aWR0aDo4MHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206MnZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJ2dztcclxufVxyXG4ucmV2aWV3X2ltYWdlXHJcbntcclxuICB3aWR0aDo1dnc7XHJcbiAgbWFyZ2luLWxlZnQ6MnZ3O1xyXG4gIHBhZGRpbmctdG9wOjJ2aDtcclxufVxyXG4ucmV2aWV3X3RleHRcclxue1xyXG4gIG1hcmdpbi10b3A6LTYlO1xyXG4gIG1hcmdpbi1sZWZ0OjE1JTtcclxuICB3aWR0aDo2NHZ3O1xyXG59XHJcbi5zdGFyXHJcbntcclxuICBkaXNwbGF5OmlubGluZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxdnc7XHJcbiAgcGFkZGluZy10b3A6IDAuNXZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjV2aDtcclxuICBwYWRkaW5nLWxlZnQ6IDF2dztcclxuICBwYWRkaW5nLXJpZ2h0OiAxdnc7XHJcbiAgbWFyZ2luLWxlZnQ6MXZ3O1xyXG59XHJcbi5yZXZpZXdfY29udGVudFxyXG57XHJcbiAgdG9wOjQwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMzsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbi5yZXZpZXdfbGluazp2aXNpdGVkXHJcbntcclxuICBjb2xvcjojNzQ0Nzk5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5kZXNjcmlwdGlvblxyXG57XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbiAgbWFyZ2luLWxlZnQ6MTAlO1xyXG59XHJcbmFwcC1jYXJvdXNlbFxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6LTUwJTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnNcclxue1xyXG4gIG1hcmdpbi1ib3R0b206LTMlXHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXZcclxue1xyXG4gIG1hcmdpbi1sZWZ0Oi03JTtcclxuICB3aWR0aDozdmg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHRcclxue1xyXG4gIG1hcmdpbi1yaWdodDotNyU7XHJcbiAgd2lkdGg6M3ZoO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ECqz":
/*!*****************************************************************!*\
  !*** ./src/app/components/mylist-page/mylist-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: MylistPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistPageComponent", function() { return MylistPageComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MylistPageComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No items found in Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MylistPageComponent_div_4_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + item_r4["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MylistPageComponent_div_4_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/movie_placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1, a2) { return ["/watch", a1, a2]; };
function MylistPageComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MylistPageComponent_div_4_div_1_img_3_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MylistPageComponent_div_4_div_1_img_4_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, item_r4["type"], item_r4["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r4["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r4["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4["title"]);
} }
function MylistPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MylistPageComponent_div_4_div_1_Template, 8, 7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.mylist_data);
} }
function MylistPageComponent_div_5_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + item_r9["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MylistPageComponent_div_5_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/movie_placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MylistPageComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MylistPageComponent_div_5_div_1_img_3_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MylistPageComponent_div_5_div_1_img_4_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, item_r9["type"], item_r9["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r9["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9["title"]);
} }
function MylistPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MylistPageComponent_div_5_div_1_Template, 8, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.mylist_data);
} }
class MylistPageComponent {
    constructor(route, breakpointObserver) {
        this.route = route;
        this.breakpointObserver = breakpointObserver;
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait
        ]).subscribe(result => {
            if (result.matches) {
                this.mobile_version = true;
            }
            else {
                this.mobile_version = false;
            }
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.mylist_data = JSON.parse(localStorage.getItem("watchlist") || "[]");
            this.row_num = Math.ceil(this.mylist_data.length / 6);
            this.row_iterater = Array(this.row_num).keys();
        });
    }
}
MylistPageComponent.ɵfac = function MylistPageComponent_Factory(t) { return new (t || MylistPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
MylistPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MylistPageComponent, selectors: [["app-mylist-page"]], decls: 6, vars: 3, consts: [[1, "mylist"], [2, "color", "white"], ["style", "text-align:center;color:white;", 4, "ngIf"], ["class", "row", 4, "ngIf"], [2, "text-align", "center", "color", "white"], [1, "row"], ["class", "col-sm-2", "style", "margin-top:5%;", 4, "ngFor", "ngForOf"], [1, "col-sm-2", 2, "margin-top", "5%"], [1, "card", "text-white", 2, "border", "none"], [3, "routerLink"], ["class", "card-img", "alt", "Card image", 3, "src", 4, "ngIf"], [1, "text_container"], [1, "text"], ["alt", "Card image", 1, "card-img", 3, "src"], ["class", "col-sm-2", "style", "margin-top:10%;width:50%;margin-left:25%;", 4, "ngFor", "ngForOf"], [1, "col-sm-2", 2, "margin-top", "10%", "width", "50%", "margin-left", "25%"], [1, "text_container", 2, "display", "block"]], template: function MylistPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My WatchList");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MylistPageComponent_h3_3_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MylistPageComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MylistPageComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mylist_data.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mylist_data.length > 0 && !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mylist_data.length > 0 && ctx.mobile_version);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".mylist[_ngcontent-%COMP%]\r\n{\r\n  display: block;\r\n  margin-left: 10%;\r\n  margin-bottom:5%;\r\n  width:80%;\r\n  \r\n}\r\n\r\nimg[_ngcontent-%COMP%]\r\n{\r\n  height: 80%;\r\n}\r\n.card.text-white[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]\r\n{\r\n  transform: scale(1.1);\r\n  transition: all 0.3s;\r\n}\r\n.card.text-white[_ngcontent-%COMP%]:hover   .text_container[_ngcontent-%COMP%]\r\n{\r\n  display:block;\r\n}\r\n.text_container[_ngcontent-%COMP%]\r\n{\r\n  display:none;\r\n  position:absolute;\r\n  background: linear-gradient(to top, black 1%, rgba(255,0,0,0) 300%);\r\n  color:white;\r\n  margin:0;\r\n  width:111%;\r\n  height:25%;\r\n  left:-5.5%;\r\n  bottom: -5.2%;\r\n  padding-left:5%;\r\n  padding-right:5%;\r\n  font-size: 0.9vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHlCQUF5QjtBQUMzQjtBQUNBLHNDQUFzQztBQUNyQzs7RUFFQyxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxxQkFBcUI7RUFHckIsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtRUFBbUU7RUFDbkUsV0FBVztFQUNYLFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtFQUNWLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibXlsaXN0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWxpc3Rcclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTo1JTtcclxuICB3aWR0aDo4MCU7XHJcbiAgLyogYm9yZGVyOnNvbGlkIHB1cnBsZTsgKi9cclxufVxyXG4vKjpob3N0IDo6bmctZGVlcCAucGljc3VtLWltZy13cmFwcGVyKi9cclxuIGltZ1xyXG57XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuLmNhcmQudGV4dC13aGl0ZTpob3ZlciBpbWdcclxue1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLmNhcmQudGV4dC13aGl0ZTpob3ZlciAudGV4dF9jb250YWluZXJcclxue1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLnRleHRfY29udGFpbmVyXHJcbntcclxuICBkaXNwbGF5Om5vbmU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2sgMSUsIHJnYmEoMjU1LDAsMCwwKSAzMDAlKTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBtYXJnaW46MDtcclxuICB3aWR0aDoxMTElO1xyXG4gIGhlaWdodDoyNSU7XHJcbiAgbGVmdDotNS41JTtcclxuICBib3R0b206IC01LjIlO1xyXG4gIHBhZGRpbmctbGVmdDo1JTtcclxuICBwYWRkaW5nLXJpZ2h0OjUlO1xyXG4gIGZvbnQtc2l6ZTogMC45dnc7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "EWjg":
/*!***********************************************************************!*\
  !*** ./src/app/components/tv-detail-page/tv-detail-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: TvDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvDetailPageComponent", function() { return TvDetailPageComponent; });
/* harmony import */ var _cast_pop_up_cast_pop_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cast-pop-up/cast-pop-up.component */ "2b62");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../carousel/carousel.component */ "qUJ1");










function TvDetailPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "youtube-player", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("videoId", ctx_r0.trailer_key)("startSeconds", 0);
} }
function TvDetailPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "youtube-player", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("videoId", ctx_r1.trailer_key)("startSeconds", 0);
} }
function TvDetailPageComponent_br_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function TvDetailPageComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Genres:\u00A0\u00A0", ctx_r3.detail_data["detail"]["genres"], "");
} }
function TvDetailPageComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Spoken Languages:\u00A0\u00A0", ctx_r4.detail_data["detail"]["spoken_languages"], "");
} }
function TvDetailPageComponent_ngb_alert_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function TvDetailPageComponent_ngb_alert_19_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.alert_text = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r5.alert_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.alert_text);
} }
function TvDetailPageComponent_br_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function TvDetailPageComponent_h5_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TvDetailPageComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TvDetailPageComponent_div_36_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const item_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.open_Modal(item_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + item_r18["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r18["character"], " ");
} }
function TvDetailPageComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TvDetailPageComponent_div_36_div_1_Template, 11, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.detail_data["cast"]);
} }
function TvDetailPageComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TvDetailPageComponent_div_37_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const item_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.open_Modal(item_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + item_r22["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22["character"]);
} }
function TvDetailPageComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TvDetailPageComponent_div_37_div_1_Template, 12, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.detail_data["cast"]);
} }
function TvDetailPageComponent_br_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function TvDetailPageComponent_h3_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Reviews\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.detail_data["review"].length);
} }
function TvDetailPageComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Read the rest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", review_r25["avatar_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("A review created by ", review_r25["author"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2605\u00A0", review_r25["rating"] ? review_r25["rating"] : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Written by ", review_r25["author"], " on ", review_r25["created_at"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](review_r25["content"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", review_r25["url"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailPageComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recommended TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-carousel", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected_data", ctx_r13.detail_data["recommend"]);
} }
function TvDetailPageComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Similar TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-carousel", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected_data", ctx_r14.detail_data["similar"]);
} }
class TvDetailPageComponent {
    constructor(route, PostsService, modalService, breakpointObserver) {
        this.route = route;
        this.PostsService = PostsService;
        this.modalService = modalService;
        this.breakpointObserver = breakpointObserver;
        this.button_text = "Add to watchlist";
        this.alert_type = "success";
        this.alert_text = "";
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait
        ]).subscribe(result => {
            if (result.matches) {
                this.mobile_version = true;
            }
            else {
                this.mobile_version = false;
            }
        });
    }
    get_detail() {
        this.PostsService.get_tv_detail(this.id).subscribe(res => {
            this.detail_data = res;
            if (this.detail_data['trailer'] && this.detail_data['trailer']['key']) {
                this.trailer_key = this.detail_data['trailer']['key'];
            }
            else {
                this.trailer_key = "tzkWB85ULJY";
            }
            //console.log(res)
            //use local storage to store data for continue watching
            var continue_watching = JSON.parse(localStorage.getItem("continue") || "[]");
            var ind = continue_watching.map(function (object) { return object.id; }).indexOf(this.detail_data['detail']['id']);
            if (ind != -1) {
                continue_watching.splice(ind, 1);
            }
            continue_watching.unshift(this.detail_data['detail']);
            if (continue_watching.length > 24) {
                continue_watching.splice(24, continue_watching.length - 24);
            }
            localStorage.setItem("continue", JSON.stringify(continue_watching));
            //localStorage.clear();
            //watchlist
            var watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
            var ind = watchlist.map(function (object) { return object.id; }).indexOf(this.detail_data['detail']['id']);
            if (ind != -1) {
                this.button_text = "Remove from watchlist";
            }
        });
    }
    button_click() {
        if (this.button_text == "Add to watchlist") {
            this.button_text = "Remove from watchlist";
            this.alert_type = "success";
            this.alert_text = "Added to watchlist";
            var watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
            watchlist.unshift(this.detail_data['detail']);
            localStorage.setItem("watchlist", JSON.stringify(watchlist));
        }
        else {
            this.button_text = "Add to watchlist";
            this.alert_type = "danger";
            this.alert_text = "Removed from watchlist";
            var watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
            var ind = watchlist.map(function (object) { return object.id; }).indexOf(this.detail_data['detail']['id']);
            watchlist.splice(ind, 1);
            localStorage.setItem("watchlist", JSON.stringify(watchlist));
        }
        setTimeout(() => { this.alert_text = ""; }, 5000);
    }
    open_Modal(cast_data) {
        const modalRef = this.modalService.open(_cast_pop_up_cast_pop_up_component__WEBPACK_IMPORTED_MODULE_0__["CastPopUpComponent"], { size: 'lg' });
        modalRef.componentInstance.cast_data = cast_data;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.button_text = "Add to watchlist";
            this.alert_type = "success";
            this.alert_text = "";
            this.id = this.route.snapshot.paramMap.get('id');
            this.get_detail();
            window.scrollTo(0, 0);
        });
    }
}
TvDetailPageComponent.ɵfac = function TvDetailPageComponent_Factory(t) { return new (t || TvDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
TvDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TvDetailPageComponent, selectors: [["app-tv-detail-page"]], decls: 45, vars: 25, consts: [[1, "detail_container"], [2, "width", "80vw", "margin-bottom", "5vh"], ["class", "embed-responsive embed-responsive-16by9", "style", "width:65%;min-width:300px;float:left;margin-right:1vw;", 4, "ngIf"], ["class", "embed-responsive embed-responsive-16by9", "style", "width:100%;float:left;margin-right:1vw;margin-bottom:5vh;", 4, "ngIf"], [1, "text1"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", "mr-2", 2, "color", "white", "background-color", "#007bfb", 3, "click"], [3, "type", "closed", 4, "ngIf"], [1, "text2", 2, "position", "relative", "clear", "both"], [2, "color", "lightgray"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fab", "fa-twitter", 2, "color", "#506cf4", "font-size", "5vh"], ["data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button_count", "data-size", "small", 1, "fb-share-button", 2, "display", "inline", "position", "absolute", "margin-left", "-1vh", "margin-bottom", "1vh"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href"], [1, "fab", "fa-facebook-square", 2, "color", "#0804fc", "font-size", "5vh", "margin-left", "2vh"], [1, "cast"], ["class", "scroll", 4, "ngIf"], [1, "review"], ["style", "color:white;", 4, "ngIf"], ["class", "review_box", 4, "ngFor", "ngForOf"], [1, "embed-responsive", "embed-responsive-16by9", 2, "width", "65%", "min-width", "300px", "float", "left", "margin-right", "1vw"], ["suggestedQuality", "highres", 3, "videoId", "startSeconds"], [1, "embed-responsive", "embed-responsive-16by9", 2, "width", "100%", "float", "left", "margin-right", "1vw", "margin-bottom", "5vh"], [3, "type", "closed"], [1, "scroll"], ["class", "col-sm-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-2", 3, "click"], [1, "card", 2, "border", "none", "cursor", "pointer"], ["alt", "Card image", 1, "card-img", 3, "src"], [1, "card-text"], [2, "font-weight", "bold"], ["class", "col-sm-2", "style", "width:45%;", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-2", 2, "width", "45%", 3, "click"], [2, "font-weight", "bold", "font-size", "1vw"], [2, "font-size", "1vw"], [2, "color", "white"], [1, "review_box"], [1, "review_image"], [2, "width", "5vw", "height", "5vw", "border-radius", "50%", 3, "src"], [1, "review_text"], [1, "star"], [2, "color", "gray"], [1, "review_content"], ["target", "_blank", 1, "review_link", 3, "href"], [1, "description"], [3, "selected_data"]], template: function TvDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TvDetailPageComponent_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TvDetailPageComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TvDetailPageComponent_br_7_Template, 1, 0, "br", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TvDetailPageComponent_p_14_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TvDetailPageComponent_p_15_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TvDetailPageComponent_Template_button_click_17_listener() { return ctx.button_click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TvDetailPageComponent_ngb_alert_19_Template, 2, 2, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, TvDetailPageComponent_br_21_Template, 1, 0, "br", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TvDetailPageComponent_h5_22_Template, 2, 0, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Full Cast and Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, TvDetailPageComponent_div_36_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, TvDetailPageComponent_div_37_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, TvDetailPageComponent_br_39_Template, 1, 0, "br", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, TvDetailPageComponent_h3_40_Template, 4, 1, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, TvDetailPageComponent_div_41_Template, 16, 7, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, TvDetailPageComponent_div_43_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, TvDetailPageComponent_div_44_Template, 4, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail_data["detail"]["title"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["detail"]["tagline"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail_data["detail"]["tagline"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx.detail_data["detail"]["release_date"].slice(0, 4), "\u00A0\u00A0|\u00A0\u00A0\u2605", ctx.detail_data["detail"]["vote_average"], " \u00A0\u00A0|\u00A0\u00A0", ctx.detail_data["detail"]["runtime"], "mins ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["detail"]["genres"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["detail"]["spoken_languages"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.button_text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alert_text);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["detail"]["overview"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["detail"]["overview"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.detail_data["detail"]["overview"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch%20", ctx.detail_data["detail"]["title"], "%0D%0Ahttps://youtu.be/", ctx.trailer_key, "%0D%0A%23USC%20%23CSCI571%20%23FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://youtu.be/", ctx.trailer_key, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["review"].length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["review"].length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.detail_data["review"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["recommend"].length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detail_data["similar"].length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlert"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"]], styles: [".detail_container[_ngcontent-%COMP%]\r\n{\r\n  position:relative;\r\n  margin-left:10vw;\r\n  width:80vw;\r\n}\r\n.text1[_ngcontent-%COMP%]\r\n{\r\n  float:left;\r\n  color:white;\r\n  width:32%;\r\n  min-width:250px;\r\n  font-size:1.2vw;\r\n}\r\n.text2[_ngcontent-%COMP%]\r\n{\r\n  color:white;\r\n  width: 80vw;\r\n  font-size:1.2vw;\r\n  margin-bottom:5vh;\r\n}\r\n.cast[_ngcontent-%COMP%]\r\n{\r\n  color:white;\r\n}\r\n.scroll[_ngcontent-%COMP%]\r\n{\r\n  overflow: auto;\r\n  white-space: nowrap;\r\n  width:80vw;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar\r\n{\r\n  height:1vh;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: transparent;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n  border-radius: 0.5vh;\r\n}\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n[_nghost-%COMP%]     .col-sm-2\r\n{\r\n  display: inline-block;\r\n}\r\n[_nghost-%COMP%]     .card\r\n{\r\n  max-width: 100%;\r\n}\r\n[_nghost-%COMP%]     .card-text\r\n{\r\n  display:block;\r\n  color:black;\r\n  text-align: center;\r\n  font-size: 0.5vw;\r\n  white-space: normal;\r\n  overflow-wrap: break-word;\r\n  \r\n}\r\n.review_box[_ngcontent-%COMP%]\r\n{\r\n  position:relative;\r\n  width:80vw;\r\n  background-color: white;\r\n  margin-bottom:2vh;\r\n  border-radius: 2vw;\r\n}\r\n.review_image[_ngcontent-%COMP%]\r\n{\r\n  width:5vw;\r\n  margin-left:2vw;\r\n  padding-top:2vh;\r\n}\r\n.review_text[_ngcontent-%COMP%]\r\n{\r\n  margin-top:-6%;\r\n  margin-left:15%;\r\n  width:64vw;\r\n}\r\n.star[_ngcontent-%COMP%]\r\n{\r\n  display:inline;\r\n  background-color: black;\r\n  color:white;\r\n  border-radius: 1vw;\r\n  padding-top: 0.5vh;\r\n  padding-bottom: 0.5vh;\r\n  padding-left: 1vw;\r\n  padding-right: 1vw;\r\n  margin-left:1vw;\r\n}\r\n.review_content[_ngcontent-%COMP%]\r\n{\r\n  top:40%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3; \r\n  -webkit-box-orient: vertical;\r\n}\r\n.review_link[_ngcontent-%COMP%]:visited\r\n{\r\n  color:#744799;\r\n  text-decoration: underline;\r\n}\r\n.description[_ngcontent-%COMP%]\r\n{\r\n  color:white;\r\n  font-size: 4vh;\r\n  margin-left:10%;\r\n}\r\napp-carousel[_ngcontent-%COMP%]\r\n{\r\n  margin-left:-50%;\r\n}\r\n[_nghost-%COMP%]     .carousel-indicators\r\n{\r\n  margin-bottom:-3%\r\n}\r\n[_nghost-%COMP%]     .carousel-control-prev\r\n{\r\n  margin-left:-7%;\r\n  width:3vh;\r\n}\r\n[_nghost-%COMP%]     .carousel-control-next\r\n{\r\n  margin-right:-7%;\r\n  width:3vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2LWRldGFpbC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFdBQVc7QUFDYjtBQUNBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qjs7K0NBRTZDO0FBQy9DO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsT0FBTztFQUNQLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHFCQUFxQixFQUFFLDRCQUE0QjtFQUNuRCw0QkFBNEI7QUFDOUI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsU0FBUztBQUNYIiwiZmlsZSI6InR2LWRldGFpbC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsX2NvbnRhaW5lclxyXG57XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6MTB2dztcclxuICB3aWR0aDo4MHZ3O1xyXG59XHJcbi50ZXh0MVxyXG57XHJcbiAgZmxvYXQ6bGVmdDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB3aWR0aDozMiU7XHJcbiAgbWluLXdpZHRoOjI1MHB4O1xyXG4gIGZvbnQtc2l6ZToxLjJ2dztcclxufVxyXG4udGV4dDJcclxue1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGZvbnQtc2l6ZToxLjJ2dztcclxuICBtYXJnaW4tYm90dG9tOjV2aDtcclxufVxyXG4uY2FzdFxyXG57XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuLnNjcm9sbFxyXG57XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDo4MHZ3O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXJcclxue1xyXG4gIGhlaWdodDoxdmg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzg4ODtcclxuICBib3JkZXItcmFkaXVzOiAwLjV2aDtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuY29sLXNtLTJcclxue1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcmRcclxue1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQtdGV4dFxyXG57XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBjb2xvcjpibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjV2dztcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgLyogLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXRcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIEZpcmVmb3gsIG90aGVyIEdlY2tvXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgICAgICBPcGVyYS9JRSA4KyAqL1xyXG59XHJcbi5yZXZpZXdfYm94XHJcbntcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB3aWR0aDo4MHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206MnZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJ2dztcclxufVxyXG4ucmV2aWV3X2ltYWdlXHJcbntcclxuICB3aWR0aDo1dnc7XHJcbiAgbWFyZ2luLWxlZnQ6MnZ3O1xyXG4gIHBhZGRpbmctdG9wOjJ2aDtcclxufVxyXG4ucmV2aWV3X3RleHRcclxue1xyXG4gIG1hcmdpbi10b3A6LTYlO1xyXG4gIG1hcmdpbi1sZWZ0OjE1JTtcclxuICB3aWR0aDo2NHZ3O1xyXG59XHJcbi5zdGFyXHJcbntcclxuICBkaXNwbGF5OmlubGluZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxdnc7XHJcbiAgcGFkZGluZy10b3A6IDAuNXZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjV2aDtcclxuICBwYWRkaW5nLWxlZnQ6IDF2dztcclxuICBwYWRkaW5nLXJpZ2h0OiAxdnc7XHJcbiAgbWFyZ2luLWxlZnQ6MXZ3O1xyXG59XHJcbi5yZXZpZXdfY29udGVudFxyXG57XHJcbiAgdG9wOjQwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMzsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbi5yZXZpZXdfbGluazp2aXNpdGVkXHJcbntcclxuICBjb2xvcjojNzQ0Nzk5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5kZXNjcmlwdGlvblxyXG57XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbiAgbWFyZ2luLWxlZnQ6MTAlO1xyXG59XHJcbmFwcC1jYXJvdXNlbFxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6LTUwJTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnNcclxue1xyXG4gIG1hcmdpbi1ib3R0b206LTMlXHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXZcclxue1xyXG4gIG1hcmdpbi1sZWZ0Oi03JTtcclxuICB3aWR0aDozdmg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHRcclxue1xyXG4gIG1hcmdpbi1yaWdodDotNyU7XHJcbiAgd2lkdGg6M3ZoO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "OhGH":
/*!***********************************************************!*\
  !*** ./src/app/components/typehead/typehead.component.ts ***!
  \***********************************************************/
/*! exports provided: TypeheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeheadComponent", function() { return TypeheadComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a1, a2) { return ["/watch", a1, a2]; };
function TypeheadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngb-highlight", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r3 = ctx.result;
    const t_r4 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, r_r3["type"], r_r3["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + r_r3["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("result", r_r3.title.slice(0, r_r3.title.length > 26 ? 26 : r_r3.title.length))("term", t_r4);
} }
class TypeheadComponent {
    constructor(PostsService) {
        this.PostsService = PostsService;
        this.search = (text$) => {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), 
            // switchMap allows returning an observable rather than maps array
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((searchText) => searchText.length < 1 ? [] : this.PostsService.get_search(searchText)));
        };
    }
    ngOnInit() {
    }
    // make sure that the model is not updated and the input field is not updated with the selected item. But text entered by a user will still be part of the input so if you want to clear up this as well you can directly update the input's value property
    onSelect($event, input) {
        $event.preventDefault();
        input.value = "";
    }
}
TypeheadComponent.ɵfac = function TypeheadComponent_Factory(t) { return new (t || TypeheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
TypeheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TypeheadComponent, selectors: [["app-typehead"]], decls: 6, vars: 3, consts: [["rt", ""], ["for", "typeahead-template"], ["id", "typeahead-template", "type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultTemplate", "ngModelChange", "selectItem"], ["input", ""], [3, "routerLink"], [1, "mr-1", 2, "width", "85px", 3, "src"], [3, "result", "term"]], template: function TypeheadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TypeheadComponent_ng_template_0_Template, 3, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TypeheadComponent_Template_input_ngModelChange_3_listener($event) { return ctx.model = $event; })("selectItem", function TypeheadComponent_Template_input_selectItem_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.onSelect($event, _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"]], styles: ["#typeahead-template[_ngcontent-%COMP%]\r\n{\r\n  background:#050a31;\r\n  border:none;\r\n  border-bottom: 2px solid white;\r\n}\r\n[_nghost-%COMP%]    .dropdown-menu{\r\n  background-color: #050A30;\r\n  border: 1px solid snow;\r\n}\r\n[_nghost-%COMP%]    .dropdown-item{\r\n  \r\n  background-color: #050A30;\r\n  color: white;\r\n  height:10vh;\r\n  padding: 0.5em;\r\n}\r\na[_ngcontent-%COMP%]\r\n{\r\n  color:white;\r\n  text-decoration: none;\r\n}\r\na[_ngcontent-%COMP%]:hover\r\n{\r\n  color:white;\r\n  text-decoration: none;\r\n}\r\n.form-control[_ngcontent-%COMP%] { width: 20vw; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVoZWFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBRUE7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFFQSxnQkFBZ0IsV0FBVyxFQUFFIiwiZmlsZSI6InR5cGVoZWFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdHlwZWFoZWFkLXRlbXBsYXRlXHJcbntcclxuICBiYWNrZ3JvdW5kOiMwNTBhMzE7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcC5kcm9wZG93bi1tZW51e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTBBMzA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgc25vdztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwLmRyb3Bkb3duLWl0ZW17XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwQTMwOyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MEEzMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OjEwdmg7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuXHJcbmFcclxue1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5hOmhvdmVyXHJcbntcclxuICBjb2xvcjp3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wgeyB3aWR0aDogMjB2dzsgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "Raku":
/*!*******************************************************************!*\
  !*** ./src/app/components/top-carousel/top-carousel.component.ts ***!
  \*******************************************************************/
/*! exports provided: TopCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopCarouselComponent", function() { return TopCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["/watch/movie", a1]; };
function TopCarouselComponent_ngb_carousel_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.cur_movie_data[0]["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/original/" + ctx_r1.cur_movie_data[0]["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cur_movie_data[0]["title"]);
} }
function TopCarouselComponent_ngb_carousel_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r2.cur_movie_data[1]["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/original/" + ctx_r2.cur_movie_data[1]["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.cur_movie_data[1]["title"]);
} }
function TopCarouselComponent_ngb_carousel_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r3.cur_movie_data[2]["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/original/" + ctx_r3.cur_movie_data[2]["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.cur_movie_data[2]["title"]);
} }
function TopCarouselComponent_ngb_carousel_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r4.cur_movie_data[3]["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/original/" + ctx_r4.cur_movie_data[3]["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.cur_movie_data[3]["title"]);
} }
function TopCarouselComponent_ngb_carousel_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r5.cur_movie_data[4]["id"]))("queryParams", ctx_r5.cur_movie_data[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/original/" + ctx_r5.cur_movie_data[4]["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.cur_movie_data[4]["title"]);
} }
function TopCarouselComponent_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopCarouselComponent_ngb_carousel_1_ng_template_1_Template, 7, 5, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopCarouselComponent_ngb_carousel_1_ng_template_2_Template, 7, 5, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopCarouselComponent_ngb_carousel_1_ng_template_3_Template, 7, 5, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopCarouselComponent_ngb_carousel_1_ng_template_4_Template, 7, 5, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopCarouselComponent_ngb_carousel_1_ng_template_5_Template, 7, 6, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TopCarouselComponent {
    constructor(PostsService) {
        this.PostsService = PostsService;
    }
    ngOnInit() {
    }
}
TopCarouselComponent.ɵfac = function TopCarouselComponent_Factory(t) { return new (t || TopCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"])); };
TopCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopCarouselComponent, selectors: [["app-top-carousel"]], inputs: { cur_movie_data: "cur_movie_data" }, decls: 2, vars: 1, consts: [[1, "resize"], ["style", "outline:none;", 4, "ngIf"], [2, "outline", "none"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], [3, "routerLink"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], [1, "title_container"], [2, "font-size", "3vw"], ["alt", "Random second slide", 3, "src"], ["alt", "Random third slide", 3, "src"], [3, "routerLink", "queryParams"]], template: function TopCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopCarouselComponent_ngb_carousel_1_Template, 6, 0, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cur_movie_data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["img[_ngcontent-%COMP%]\r\n{\r\n  width:100%;\r\n  height:100%;\r\n}\r\n.resize[_ngcontent-%COMP%]\r\n{\r\n  display:block;\r\n  margin-left: 10%;\r\n  width:80%;\r\n}\r\n[_nghost-%COMP%]     .carousel-caption\r\n{\r\n  display:none;\r\n  background: linear-gradient(to top, black 60%, rgba(255,0,0,0) 120%);\r\n  width:100%;\r\n  height:20%;\r\n  left:0;\r\n  bottom:0;\r\n}\r\n[_nghost-%COMP%]     ngb-carousel:hover .carousel-caption\r\n{\r\n  display:block;\r\n}\r\n[_nghost-%COMP%]     ngb-carousel:hover img\r\n{\r\n  transform: scale(1.1);\r\n  transition: all 0.3s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDtBQUNBOztFQUVFLFlBQVk7RUFDWixvRUFBb0U7RUFDcEUsVUFBVTtFQUNWLFVBQVU7RUFDVixNQUFNO0VBQ04sUUFBUTtBQUNWO0FBQ0E7O0VBRUUsYUFBYTtBQUNmO0FBQ0E7O0VBRUUscUJBQXFCO0VBR3JCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJ0b3AtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ1xyXG57XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG4ucmVzaXplXHJcbntcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgd2lkdGg6ODAlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtY2FwdGlvblxyXG57XHJcbiAgZGlzcGxheTpub25lO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrIDYwJSwgcmdiYSgyNTUsMCwwLDApIDEyMCUpO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjIwJTtcclxuICBsZWZ0OjA7XHJcbiAgYm90dG9tOjA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIG5nYi1jYXJvdXNlbDpob3ZlciAuY2Fyb3VzZWwtY2FwdGlvblxyXG57XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgbmdiLWNhcm91c2VsOmhvdmVyIGltZ1xyXG57XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.0.8/css/all.css"], [1, "footer"], [2, "color", "white"], ["id", "fb-root"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Powered by TMDB. Developed by Tianyi An");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]\r\n{\r\n  position:relative;\r\n  height:auto;\r\n  background-color: #050a31;\r\n}\r\n.footer[_ngcontent-%COMP%]\r\n{\r\n  text-align: center;\r\n  background-color: black;\r\n  padding:1%;\r\n  width:100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsVUFBVTtBQUNaIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keVxyXG57XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgaGVpZ2h0OmF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MGEzMTtcclxufVxyXG4uZm9vdGVyXHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzoxJTtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_movie_detail_page_movie_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movie-detail-page/movie-detail-page.component */ "4zRL");
/* harmony import */ var _components_tv_detail_page_tv_detail_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tv-detail-page/tv-detail-page.component */ "EWjg");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_typehead_typehead_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/typehead/typehead.component */ "OhGH");
/* harmony import */ var _components_top_carousel_top_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/top-carousel/top-carousel.component */ "Raku");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_cast_pop_up_cast_pop_up_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cast-pop-up/cast-pop-up.component */ "2b62");
/* harmony import */ var _components_mylist_page_mylist_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/mylist-page/mylist-page.component */ "ECqz");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayerModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
        _components_movie_detail_page_movie_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailPageComponent"],
        _components_tv_detail_page_tv_detail_page_component__WEBPACK_IMPORTED_MODULE_7__["TvDetailPageComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _components_typehead_typehead_component__WEBPACK_IMPORTED_MODULE_11__["TypeheadComponent"],
        _components_top_carousel_top_carousel_component__WEBPACK_IMPORTED_MODULE_12__["TopCarouselComponent"],
        _components_cast_pop_up_cast_pop_up_component__WEBPACK_IMPORTED_MODULE_15__["CastPopUpComponent"],
        _components_mylist_page_mylist_page_component__WEBPACK_IMPORTED_MODULE_16__["MylistPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayerModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"]] }); })();


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typehead/typehead.component */ "OhGH");




class NavBarComponent {
    constructor() {
        this.isMenuCollapsed = true;
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 16, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", 2, "background-color", "#020c21"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0", 2, "text-align", "right"], [1, "nav-item", "active"], ["routerLink", "/", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "/mylist", 1, "nav-link"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_3_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-typehead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_3__["TypeheadComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "jwUf":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PostsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get_home() {
        let URL = "/apis";
        return this.httpClient.get(URL);
    }
    get_search(keyword) {
        let URL = "/apis/search/" + keyword;
        return this.httpClient.get(URL);
    }
    get_movie_detail(id) {
        let URL = "/apis/watch/movie/" + id;
        return this.httpClient.get(URL);
    }
    get_tv_detail(id) {
        let URL = "/apis/watch/tv/" + id;
        return this.httpClient.get(URL);
    }
    get_cast_detail(id) {
        let URL = "/apis/cast/" + id;
        return this.httpClient.get(URL);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _top_carousel_top_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../top-carousel/top-carousel.component */ "Raku");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../carousel/carousel.component */ "qUJ1");







function HomepageComponent_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_div_2_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomepageComponent_div_2_p_1_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomepageComponent_div_2_p_2_Template, 2, 0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.mobile_version);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.mobile_version);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected_data", ctx_r0.continue_watching);
} }
function HomepageComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Popular movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Popular movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Top rated movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Top rated movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Trending movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Trending movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Popular TV shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Popular TV shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Top rated TV shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Top rated TV shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Trending TV shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomepageComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Trending TV shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HomepageComponent {
    constructor(PostsService, breakpointObserver) {
        this.PostsService = PostsService;
        this.breakpointObserver = breakpointObserver;
        this.carousel_type = "unassigned";
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait
        ]).subscribe(result => {
            if (result.matches) {
                this.mobile_version = true;
            }
            else {
                this.mobile_version = false;
            }
        });
    }
    ngOnInit() {
        this.fetchData();
        this.continue_watching = JSON.parse(localStorage.getItem("continue") || "[]");
        //localStorage.clear();
    }
    fetchData() {
        this.PostsService.get_home().subscribe(res => {
            this.data = res;
            this.cur_movie = this.data['cur_movie'];
            this.pop_movie = this.data['pop_movie'];
            this.top_movie = this.data['top_movie'];
            this.trend_movie = this.data['trend_movie'];
            this.pop_tv = this.data['pop_tv'];
            this.top_tv = this.data['top_tv'];
            this.trend_tv = this.data['trend_tv'];
            //console.log(res)
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 21, vars: 20, consts: [[3, "cur_movie_data"], [2, "margin-top", "5%"], [4, "ngIf"], ["class", "description", 4, "ngIf"], ["class", "description", "style", "margin-left:25%;", 4, "ngIf"], [3, "selected_data"], [1, "description"], [1, "description", 2, "margin-left", "25%"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-top-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomepageComponent_div_2_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomepageComponent_p_3_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomepageComponent_p_4_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomepageComponent_p_6_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomepageComponent_p_7_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomepageComponent_p_9_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomepageComponent_p_10_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomepageComponent_p_12_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomepageComponent_p_13_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomepageComponent_p_15_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomepageComponent_p_16_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomepageComponent_p_18_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HomepageComponent_p_19_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-carousel", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cur_movie_data", ctx.cur_movie);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.continue_watching.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected_data", ctx.pop_movie);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected_data", ctx.top_movie);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected_data", ctx.trend_movie);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected_data", ctx.pop_tv);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected_data", ctx.top_tv);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected_data", ctx.trend_tv);
    } }, directives: [_top_carousel_top_carousel_component__WEBPACK_IMPORTED_MODULE_3__["TopCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"]], styles: [".description[_ngcontent-%COMP%]\r\n{\r\n  color:white;\r\n  font-size: 4vh;\r\n  margin-left:10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb25cclxue1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG4gIG1hcmdpbi1sZWZ0OjEwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "qUJ1":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function CarouselComponent_div_0_ngb_carousel_1_1_ng_template_0_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + item_r9["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_0_ngb_carousel_1_1_ng_template_0_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/movie_placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1, a2) { return ["/watch", a1, a2]; };
function CarouselComponent_div_0_ngb_carousel_1_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_div_0_ngb_carousel_1_1_ng_template_0_div_1_img_3_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselComponent_div_0_ngb_carousel_1_1_ng_template_0_div_1_img_4_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, item_r9["type"], item_r9["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r9["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9["title"]);
} }
function CarouselComponent_div_0_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_0_ngb_carousel_1_1_ng_template_0_div_1_Template, 8, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.selected_data.slice(0, 6));
} }
function CarouselComponent_div_0_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_div_0_ngb_carousel_1_1_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function CarouselComponent_div_0_ngb_carousel_1_2_ng_template_0_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + item_r15["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_0_ngb_carousel_1_2_ng_template_0_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/movie_placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_0_ngb_carousel_1_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_div_0_ngb_carousel_1_2_ng_template_0_div_1_img_3_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselComponent_div_0_ngb_carousel_1_2_ng_template_0_div_1_img_4_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, item_r15["type"], item_r15["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r15["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r15["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r15["title"]);
} }
function CarouselComponent_div_0_ngb_carousel_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_0_ngb_carousel_1_2_ng_template_0_div_1_Template, 8, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.selected_data.slice(6, 12));
} }
function CarouselComponent_div_0_ngb_carousel_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_div_0_ngb_carousel_1_2_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function CarouselComponent_div_0_ngb_carousel_1_3_ng_template_0_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + item_r21["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_0_ngb_carousel_1_3_ng_template_0_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/movie_placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_0_ngb_carousel_1_3_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_div_0_ngb_carousel_1_3_ng_template_0_div_1_img_3_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselComponent_div_0_ngb_carousel_1_3_ng_template_0_div_1_img_4_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, item_r21["type"], item_r21["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r21["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r21["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r21["title"]);
} }
function CarouselComponent_div_0_ngb_carousel_1_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_0_ngb_carousel_1_3_ng_template_0_div_1_Template, 8, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r19.selected_data.slice(12, 18));
} }
function CarouselComponent_div_0_ngb_carousel_1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_div_0_ngb_carousel_1_3_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function CarouselComponent_div_0_ngb_carousel_1_4_ng_template_0_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + item_r27["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_0_ngb_carousel_1_4_ng_template_0_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/movie_placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_0_ngb_carousel_1_4_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_div_0_ngb_carousel_1_4_ng_template_0_div_1_img_3_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselComponent_div_0_ngb_carousel_1_4_ng_template_0_div_1_img_4_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, item_r27["type"], item_r27["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r27["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r27["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r27["title"]);
} }
function CarouselComponent_div_0_ngb_carousel_1_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_0_ngb_carousel_1_4_ng_template_0_div_1_Template, 8, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r25.selected_data.slice(18, ctx_r25.selected_data.length > 24 ? 24 : ctx_r25.selected_data.length));
} }
function CarouselComponent_div_0_ngb_carousel_1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_div_0_ngb_carousel_1_4_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function CarouselComponent_div_0_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_0_ngb_carousel_1_1_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_div_0_ngb_carousel_1_2_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_div_0_ngb_carousel_1_3_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselComponent_div_0_ngb_carousel_1_4_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selected_data.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selected_data.length > 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selected_data.length > 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selected_data.length > 18);
} }
function CarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_0_ngb_carousel_1_Template, 5, 4, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selected_data);
} }
function CarouselComponent_div_1_ngb_carousel_1_1_ng_template_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + item_r33["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_1_ngb_carousel_1_1_ng_template_0_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/movie_placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_1_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_div_1_ngb_carousel_1_1_ng_template_0_img_2_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_div_1_ngb_carousel_1_1_ng_template_0_img_3_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, item_r33["type"], item_r33["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r33["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r33["poster_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r33["title"]);
} }
function CarouselComponent_div_1_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_div_1_ngb_carousel_1_1_ng_template_0_Template, 7, 7, "ng-template", 6);
} }
function CarouselComponent_div_1_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_1_ngb_carousel_1_1_Template, 1, 0, undefined, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r31.selected_data);
} }
function CarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_1_ngb_carousel_1_Template, 2, 1, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selected_data);
} }
class CarouselComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait
        ]).subscribe(result => {
            if (result.matches) {
                this.mobile_version = true;
            }
            else {
                this.mobile_version = false;
            }
        });
    }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], inputs: { selected_data: "selected_data" }, decls: 2, vars: 2, consts: [["class", "resize", 4, "ngIf"], ["class", "resize remove_indicators", 4, "ngIf"], [1, "resize"], ["style", "outline:none;", 4, "ngIf"], [2, "outline", "none"], [4, "ngIf"], ["ngbSlide", ""], [1, "row"], ["class", "col-sm-2", 4, "ngFor", "ngForOf"], [1, "col-sm-2"], [1, "card", "text-white", 2, "border", "none"], [3, "routerLink"], ["class", "card-img", "alt", "Card image", 3, "src", 4, "ngIf"], [1, "text_container"], [1, "text"], ["alt", "Card image", 1, "card-img", 3, "src"], [1, "resize", "remove_indicators"], [4, "ngFor", "ngForOf"], [1, "text_container", 2, "display", "block"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile_version);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".resize[_ngcontent-%COMP%]\r\n{\r\n  display: block;\r\n  margin-left: 10%;\r\n  margin-bottom:5%;\r\n  width:80%;\r\n  height:40%;\r\n  \r\n}\r\n\r\nimg[_ngcontent-%COMP%]\r\n{\r\n  height: 80%;\r\n}\r\n.card.text-white[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]\r\n{\r\n  transform: scale(1.1);\r\n  transition: all 0.3s;\r\n}\r\n.card.text-white[_ngcontent-%COMP%]:hover   .text_container[_ngcontent-%COMP%]\r\n{\r\n  display:block;\r\n}\r\n[_nghost-%COMP%]     .carousel-indicators\r\n{\r\n  margin-bottom:-3%\r\n}\r\n[_nghost-%COMP%]     .carousel-control-prev\r\n{\r\n  margin-left:-7%;\r\n  width:3vh;\r\n}\r\n[_nghost-%COMP%]     .carousel-control-next\r\n{\r\n  margin-right:-7%;\r\n  width:3vh;\r\n}\r\n.text_container[_ngcontent-%COMP%]\r\n{\r\n  display:none;\r\n  position:absolute;\r\n  background: linear-gradient(to top, black 1%, rgba(255,0,0,0) 300%);\r\n  color:white;\r\n  margin:0;\r\n  width:111%;\r\n  height:25%;\r\n  left:-5.5%;\r\n  bottom: -5.2%;\r\n  padding-left:6%;\r\n  padding-right:5%;\r\n  font-size: 0.9vw;\r\n}\r\n[_nghost-%COMP%]     .remove_indicators .carousel-indicators\r\n{\r\n  display:none;\r\n}\r\n[_nghost-%COMP%]     .remove_indicators .carousel-control-prev\r\n{\r\n  margin-left:-30%;\r\n  width:3vh;\r\n}\r\n[_nghost-%COMP%]     .remove_indicators .carousel-control-next\r\n{\r\n  margin-right:-30%;\r\n  width:3vh;\r\n}\r\n.remove_indicators[_ngcontent-%COMP%]\r\n{\r\n  width:50%;\r\n  margin-left:25%;\r\n  margin-bottom:20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQSxzQ0FBc0M7QUFDckM7O0VBRUMsV0FBVztBQUNiO0FBQ0E7O0VBRUUscUJBQXFCO0VBR3JCLG9CQUFvQjtBQUN0QjtBQUNBOztFQUVFLGFBQWE7QUFDZjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsU0FBUztBQUNYO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDtBQUNBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUVBQW1FO0VBQ25FLFdBQVc7RUFDWCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDtBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc2l6ZVxyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tYm90dG9tOjUlO1xyXG4gIHdpZHRoOjgwJTtcclxuICBoZWlnaHQ6NDAlO1xyXG4gIC8qIGJvcmRlcjpzb2xpZCBwdXJwbGU7ICovXHJcbn1cclxuLyo6aG9zdCA6Om5nLWRlZXAgLnBpY3N1bS1pbWctd3JhcHBlciovXHJcbiBpbWdcclxue1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcbi5jYXJkLnRleHQtd2hpdGU6aG92ZXIgaW1nXHJcbntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5jYXJkLnRleHQtd2hpdGU6aG92ZXIgLnRleHRfY29udGFpbmVyXHJcbntcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtaW5kaWNhdG9yc1xyXG57XHJcbiAgbWFyZ2luLWJvdHRvbTotMyVcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldlxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6LTclO1xyXG4gIHdpZHRoOjN2aDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dFxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0Oi03JTtcclxuICB3aWR0aDozdmg7XHJcbn1cclxuLnRleHRfY29udGFpbmVyXHJcbntcclxuICBkaXNwbGF5Om5vbmU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2sgMSUsIHJnYmEoMjU1LDAsMCwwKSAzMDAlKTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBtYXJnaW46MDtcclxuICB3aWR0aDoxMTElO1xyXG4gIGhlaWdodDoyNSU7XHJcbiAgbGVmdDotNS41JTtcclxuICBib3R0b206IC01LjIlO1xyXG4gIHBhZGRpbmctbGVmdDo2JTtcclxuICBwYWRkaW5nLXJpZ2h0OjUlO1xyXG4gIGZvbnQtc2l6ZTogMC45dnc7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucmVtb3ZlX2luZGljYXRvcnMgLmNhcm91c2VsLWluZGljYXRvcnNcclxue1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnJlbW92ZV9pbmRpY2F0b3JzIC5jYXJvdXNlbC1jb250cm9sLXByZXZcclxue1xyXG4gIG1hcmdpbi1sZWZ0Oi0zMCU7XHJcbiAgd2lkdGg6M3ZoO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucmVtb3ZlX2luZGljYXRvcnMgLmNhcm91c2VsLWNvbnRyb2wtbmV4dFxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0Oi0zMCU7XHJcbiAgd2lkdGg6M3ZoO1xyXG59XHJcblxyXG4ucmVtb3ZlX2luZGljYXRvcnNcclxue1xyXG4gIHdpZHRoOjUwJTtcclxuICBtYXJnaW4tbGVmdDoyNSU7XHJcbiAgbWFyZ2luLWJvdHRvbToyMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_movie_detail_page_movie_detail_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/movie-detail-page/movie-detail-page.component */ "4zRL");
/* harmony import */ var _components_tv_detail_page_tv_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tv-detail-page/tv-detail-page.component */ "EWjg");
/* harmony import */ var _components_mylist_page_mylist_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mylist-page/mylist-page.component */ "ECqz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    {
        path: 'watch',
        children: [
            {
                path: 'movie',
                children: [
                    { path: ':id', component: _components_movie_detail_page_movie_detail_page_component__WEBPACK_IMPORTED_MODULE_2__["MovieDetailPageComponent"] }
                ]
            },
            {
                path: 'tv',
                children: [
                    { path: ':id', component: _components_tv_detail_page_tv_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["TvDetailPageComponent"] }
                ]
            }
        ]
    },
    { path: 'mylist', component: _components_mylist_page_mylist_page_component__WEBPACK_IMPORTED_MODULE_4__["MylistPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map