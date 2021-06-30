import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async />);

    //Instead of findAllByRole, getAllByRole cannot  be used because in the initial cycle no results are gathered from http req
    //find queries return promise and rund more than one until gets succesfull result
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).toHaveLength(1);
  });
});
