"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryType = exports.StoryPoints = exports.BacklogState = void 0;
/**
 *
 *
 * @export
 * @enum {number}
 */
var BacklogState;
(function (BacklogState) {
    BacklogState["Open"] = "Open";
    BacklogState["Started"] = "Started";
    BacklogState["Done"] = "Done";
})(BacklogState = exports.BacklogState || (exports.BacklogState = {}));
/**
 *
 *
 * @export
 * @enum {number}
 */
var StoryPoints;
(function (StoryPoints) {
    StoryPoints["_1"] = "_1";
    StoryPoints["_2"] = "_2";
    StoryPoints["_3"] = "_3";
    StoryPoints["_5"] = "_5";
    StoryPoints["_8"] = "_8";
    StoryPoints["_13"] = "_13";
    StoryPoints["_20"] = "_20";
    StoryPoints["_40"] = "_40";
    StoryPoints["_100"] = "_100";
})(StoryPoints = exports.StoryPoints || (exports.StoryPoints = {}));
/**
 *
 *
 * @export
 * @enum {number}
 */
var StoryType;
(function (StoryType) {
    StoryType["Feature"] = "Feature";
    StoryType["Bug"] = "Bug";
})(StoryType = exports.StoryType || (exports.StoryType = {}));
//# sourceMappingURL=StoriesEnum.js.map