import * as chai from "chai";
import {
    createRequestPayload, baseRequest
} from "./testUtils";
import { StoriesClient, StoriesModel as model } from "../src/index";
chai.should();

describe("[SDK] StoriesClient", () => {

    const storiesClient = new StoriesClient();
    before(async () => {
        console.log("Start Running Stories Client Tests....");
    });

    after(async () => {
        console.log("Finish Stories Client Tests....")
    });
    const timeOffset = new Date().getTime();
    const testInput = {
        SprintID: 1111,
        StoryID: 2222,
        TaskID: 3333
    }

    it("storiesClient should not be undefined or null", async () => {
        storiesClient.should.not.be.undefined;
        storiesClient.should.not.be.null;
    });

    describe("StoriesClient.Sprint", () => {

        it("should Create Sprint", async () => {
            storiesClient.should.not.be.undefined;
            const sprints = await storiesClient.getSprints(createRequestPayload(baseRequest, {}) as model.GetSprintsRequest);
            const sprint = await storiesClient.createSprint(createRequestPayload(baseRequest, {
                DurationInWeeks: 2,
                Name: "testSprint_" + timeOffset,
                StartsAfterSprint: sprints.Sprints[0].SprintID
            }) as model.CreateSprintRequest);
            sprint.should.not.be.undefined;
            sprint.should.not.be.null;
            testInput.SprintID = sprint.NewSprintID;
        });

        it("should GET Sprint(s)", async () => {
            storiesClient.should.not.be.undefined;
            const sprints = await storiesClient.getSprints(createRequestPayload(baseRequest, {
            }) as model.GetSprintsRequest);
            sprints.should.not.be.undefined;
            sprints.should.not.be.null;
        });

        it("should GET Sprint By ID", async () => {
            storiesClient.should.not.be.undefined;
            const sprints = await storiesClient.getSprintByID(createRequestPayload(baseRequest, {
                SprintID: testInput.SprintID
            }) as model.GetSprintByIDRequest);
            sprints.should.not.be.undefined;
            sprints.should.not.be.null;
            (sprints as model.GetSprintByIDResponse).Sprint.SprintID.should.equal(testInput.SprintID);
        });
    });

    describe("StoriesClient.Story", () => {

        it("should Create Story", async () => {
            storiesClient.should.not.be.undefined;
            const story = await storiesClient.createStory(createRequestPayload(baseRequest, {
                Description: "test Story",
                Name: "testStory_" + timeOffset,
                SprintID: testInput.SprintID,
                StoryType: model.StoryType.Feature,
            }) as model.CreateStoryRequest);
            story.should.not.be.undefined;
            story.should.not.be.null;
            //(story as model.CreateStoryResponse).NewStoryID.should.be.a('number');
            testInput.StoryID = story.NewStoryID;
        });

        it("should GET Stories(s)", async () => {
            storiesClient.should.not.be.undefined;
            const stories = await storiesClient.getStories(createRequestPayload(baseRequest, {
                SprintID: testInput.SprintID
            }) as model.GetStoriesRequest);
            stories.should.not.be.undefined;
            stories.should.not.be.null;
            (stories as model.GetStoriesResponse).Stories.length.should.equal(1);
        });

        it("should GET Story By ID", async () => {
            storiesClient.should.not.be.undefined;
            const story = await storiesClient.getStoryByID(createRequestPayload(baseRequest, {
                StoryID: testInput.StoryID
            }) as model.GetStoryByIDRequest);
            story.should.not.be.undefined;
            story.should.not.be.null;
            (story as model.GetStoryByIDResponse).Story.StoryID.should.equal(testInput.StoryID);
        });

        it("should Update Story", async () => {
            const storyInput = {
                Description: "update Story",
                ParentSprintID: testInput.SprintID,
                Name: "testStory_" + timeOffset,
                StoryType: model.StoryType.Feature,
                Points: model.StoryPoints._3,
                Status: model.BacklogState.Started,
                StoryID: testInput.StoryID
            }
            storiesClient.should.not.be.undefined;
            const newStory = await storiesClient.updateStory(createRequestPayload(baseRequest, storyInput) as model.UpdateStoryRequest);
            newStory.should.not.be.undefined;
            newStory.should.not.be.null;
            (newStory as model.UpdateStoryResponse).Success.should.equal(true);
        });
    });

    describe("StoriesClient.Task", () => {

        it("should Create Task", async () => {
            storiesClient.should.not.be.undefined;
            const task = await storiesClient.createTask(createRequestPayload(baseRequest, {
                Description: "test Task",
                Name: "testTask_" + timeOffset,
                StoryID: testInput.StoryID
            }) as model.CreateTaskRequest);
            task.should.not.be.undefined;
            task.should.not.be.null;
            testInput.TaskID = task.NewTaskID;
        });

        it("should GET Task(s)", async () => {
            storiesClient.should.not.be.undefined;
            const tasks = await storiesClient.getTasks(createRequestPayload(baseRequest, {
                StoryID: testInput.StoryID
            }) as model.GetTasksRequest);
            tasks.should.not.be.undefined;
            tasks.should.not.be.null;
            (tasks as model.GetTasksResponse).Tasks.length.should.equal(1);
        });

        it("should GET Task By ID", async () => {
            storiesClient.should.not.be.undefined;
            const task = await storiesClient.getTaskByID(createRequestPayload(baseRequest, {
                TaskID: testInput.TaskID
            }) as model.GetTaskByIDRequest);
            task.should.not.be.undefined;
            task.should.not.be.null;
            (task as model.GetTaskByIDResponse).Task.TaskID.should.equal(testInput.TaskID);
        });

        it("should Update Task", async () => {
            const taskInput = {
                Description: "update Task",
                IsCompleted: true,
                Name: "testTask_" + timeOffset,
                ParentStoryID: testInput.StoryID,
                TaskID: testInput.TaskID
            }
            storiesClient.should.not.be.undefined;
            const newTask = await storiesClient.updateTask(createRequestPayload(baseRequest, taskInput) as model.UpdateTaskRequest);
            newTask.should.not.be.undefined;
            newTask.should.not.be.null;
            (newTask as model.UpdateStoryResponse).Success.should.equal(true);
        });
    });
});