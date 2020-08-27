import { StoriesBaseRequest } from "./StoriesBaseRequest";
import { StoryPoints, StoryType, BacklogState } from "../StoriesEnum";
/**
 *
 *
 * @export
 * @interface CreateSprintRequest
 * @extends {StoriesBaseRequest}
 */
export interface CreateSprintRequest extends StoriesBaseRequest {
    DurationInWeeks: number;
    Name: string;
    StartDate?: Date;
    StartsAfterSprint: number;
}
/**
 *
 *
 * @export
 * @interface CreateStoryRequest
 * @extends {StoriesBaseRequest}
 */
export interface CreateStoryRequest extends StoriesBaseRequest {
    Description?: string;
    Name: string;
    Points?: StoryPoints;
    SprintID: number;
    StoryType: StoryType;
}
/**
 *
 *
 * @export
 * @interface CreateTaskRequest
 * @extends {StoriesBaseRequest}
 */
export interface CreateTaskRequest extends StoriesBaseRequest {
    Description?: string;
    Name: string;
    StoryID: number;
}
/**
 *
 *
 * @export
 * @interface GetSprintByIDRequest
 * @extends {StoriesBaseRequest}
 */
export interface GetSprintByIDRequest extends StoriesBaseRequest {
    SprintID: number;
}
/**
 *
 *
 * @export
 * @interface GetSprintsRequest
 * @extends {StoriesBaseRequest}
 */
export interface GetSprintsRequest extends StoriesBaseRequest {
}
/**
 *
 *
 * @export
 * @interface GetStoriesRequest
 * @extends {StoriesBaseRequest}
 */
export interface GetStoriesRequest extends StoriesBaseRequest {
    SprintID: number;
}
/**
 *
 *
 * @export
 * @interface GetStoryByIDRequest
 * @extends {StoriesBaseRequest}
 */
export interface GetStoryByIDRequest extends StoriesBaseRequest {
    StoryID: number;
}
/**
 *
 *
 * @export
 * @interface GetTaskByIDRequest
 * @extends {StoriesBaseRequest}
 */
export interface GetTaskByIDRequest extends StoriesBaseRequest {
    TaskID: number;
}
/**
 *
 *
 * @export
 * @interface GetTasksRequest
 * @extends {StoriesBaseRequest}
 */
export interface GetTasksRequest extends StoriesBaseRequest {
    StoryID: number;
}
/**
 *
 *
 * @export
 * @interface UpdateStoryRequest
 * @extends {StoriesBaseRequest}
 */
export interface UpdateStoryRequest extends StoriesBaseRequest {
    Description: string;
    Name: string;
    ParentSprintID: number;
    Points: StoryPoints;
    Status: BacklogState;
    StoryID: number;
    StoryType: StoryType;
}
/**
 *
 *
 * @export
 * @interface UpdateTaskRequest
 * @extends {StoriesBaseRequest}
 */
export interface UpdateTaskRequest extends StoriesBaseRequest {
    Description: string;
    IsCompleted: boolean;
    Name: string;
    ParentStoryID: number;
    ProjectID: string;
    TaskID: number;
}
