// import { getById } from "./getById";
// import { Card } from "../../models/card";
// import { Todo } from "../../models/todo";
// import RequestError from "../../helpers";

jest.mock("../../models/card");
jest.mock("../../models/todo");
jest.mock("../../helpers");

describe("getById function", () => {
  const mockRequest = {
    params: { id: "fakeId" },
  };

  const mockResponse = {
    json: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should handle the case when Card is found", async () => {
    const mockCard = {
      _id: "fakeId",
      name: "Fake Card",
      toObject: jest.fn().mockReturnThis(),
    };

    Card.findById.mockResolvedValueOnce(mockCard);
    Todo.find.mockResolvedValueOnce([]);

    await getById(mockRequest, mockResponse);

    expect(Card.findById).toHaveBeenCalledWith("fakeId");
    expect(Todo.find).toHaveBeenCalledWith({ cardId: "fakeId" });
    expect(mockResponse.json).toHaveBeenCalledWith({
      _id: "fakeId",
      name: "Fake Card",
      todos: [],
    });
  });

  it("should handle the case when Card is not found", async () => {
    Card.findById.mockResolvedValueOnce(null);

    await getById(mockRequest, mockResponse);

    expect(RequestError).toHaveBeenCalledWith("404", "Not found");
    expect(mockResponse.json).not.toHaveBeenCalled();
  });

  it("should handle errors during Card.findById", async () => {
    const error = new Error("Some error");
    Card.findById.mockRejectedValueOnce(error);

    await getById(mockRequest, mockResponse);

    expect(RequestError).toHaveBeenCalledWith("500", "Internal Server Error");
    expect(mockResponse.json).not.toHaveBeenCalled();
  });

  it("should handle errors during Todo.find", async () => {
    const mockCard = {
      _id: "fakeId",
      name: "Fake Card",
      toObject: jest.fn().mockReturnThis(),
    };

    const error = new Error("Some error");
    Card.findById.mockResolvedValueOnce(mockCard);
    Todo.find.mockRejectedValueOnce(error);

    await getById(mockRequest, mockResponse);

    expect(RequestError).toHaveBeenCalledWith("500", "Internal Server Error");
    expect(mockResponse.json).not.toHaveBeenCalled();
  });
});
