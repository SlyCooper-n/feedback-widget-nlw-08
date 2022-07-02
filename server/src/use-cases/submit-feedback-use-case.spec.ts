import { describe, expect, it } from "vitest";
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const submitFeedback = new SubmitFeedbackUseCase(
  { create: () => Promise.resolve() },
  { sendMail: () => Promise.resolve() }
);

describe("Submit Feedback", () => {
  it("should submit a feedback", () => {
    expect(
      submitFeedback.run({
        type: "BUG",
        comment: "This is a comment",
        screenshot: "data:image/png/base64,example.com/screenshot.png",
      })
    ).resolves.not.toThrow();
  });

  it("should throw an error if type or comment is not provided", () => {
    expect(
      submitFeedback.run({
        type: "",
        comment: "",
      })
    ).rejects.toThrow("Type and comment are required");
  });

  it("should throw an error if screenshot is not a valid URL", () => {
    expect(
      submitFeedback.run({
        type: "IDEA",
        comment: "This is another comment",
        screenshot: "example.com/screenshot.png",
      })
    ).rejects.toThrow("Screenshot must be a valid URL");
  });
});
