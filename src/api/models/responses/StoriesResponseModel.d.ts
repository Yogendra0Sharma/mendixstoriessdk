import { StoryPoints, StoryType, BacklogState } from "../StoriesEnum";
/**
 *
 *
 * @export
 * @interface Sprint
 */
export interface Sprint {
    SprintID: number;
    Name: string;
    HasStories: boolean;
    Completed: boolean;
    IsActiveSprint: boolean;
    Deleted: boolean;
    CreationDate: Date;
    StartDate: Date;
    EndDate: Date;
    isBacklog: boolean;
}
/**
 *
 *
 * @export
 * @interface GetSprintsResponse
 */
export interface GetSprintsResponse {
    Sprints: [Sprint];
}
/**
 *
 *
 * @export
 * @interface Story
 */
export interface Story {
    Description: string;
    Name: string;
    ParentSprintID: number;
    Points: StoryPoints;
    Status: BacklogState;
    StoryID: number;
    StoryType: StoryType;
    HasTasks: boolean;
    Deleted: boolean;
    CreationDate: Date;
    FinishDate: Date;
}
/**
 *
 *
 * @export
 * @interface GetStoriesResponse
 */
export interface GetStoriesResponse {
    Stories: [Story];
}
/**
 *
 *
 * @export
 * @interface Task
 */
export interface Task {
    TaskID: number;
    ParentStoryID: string;
    Name: string;
    Description: string;
    IsCompleted: boolean;
    Deleted: boolean;
    CreationDate: Date;
    FinishDate: Date;
}
/**
 *
 *
 * @export
 * @interface GetTasksResponse
 */
export interface GetTasksResponse {
    Tasks: [Task];
}
/**
 *
 *
 * @export
 * @interface CreateSprintResponse
 */
export interface CreateSprintResponse {
    NewSprintID: number;
}
/**
 *
 *
 * @export
 * @interface GetSprintByIDResponse
 */
export interface GetSprintByIDResponse {
    Sprint: Sprint;
}
/**
 *
 *
 * @export
 * @interface CreateStoryResponse
 */
export interface CreateStoryResponse {
    NewStoryID: number;
}
/**
 *
 *
 * @export
 * @interface CreateTaskResponse
 */
export interface CreateTaskResponse {
    NewTaskID: number;
}
/**
 *
 *
 * @export
 * @interface UpdateStoryResponse
 */
export interface UpdateStoryResponse {
    Success: boolean;
}
/**
 *
 *
 * @export
 * @interface UpdateTaskResponse
 */
export interface UpdateTaskResponse {
    Success: boolean;
}
/**
 *
 *
 * @export
 * @interface GetTaskByIDResponse
 */
export interface GetTaskByIDResponse {
    Task: Task;
}
/**
 *
 *
 * @export
 * @interface GetStoryByIDResponse
 */
export interface GetStoryByIDResponse {
    Story: Story;
}
