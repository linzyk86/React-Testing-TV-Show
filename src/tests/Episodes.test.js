import React from "react";
import Episodes from '../components/Episodes';
import {render} from '@testing-library/react';

test("re-renders correctly with the list of episodes", () => {
    // Arrange (render the component and set up mock data)
    const {rerender, getAllByTestId, queryAllByTestId} = render(<Episodes episodes = {[]} />)
    // (mini assertion: check that there are no missions yet when the component first renders)

     const initialEpisode = queryAllByTestId(/episode/i);
     expect(initialEpisode).toHaveLength(0);
     expect(initialEpisode).toStrictEqual([]);

    // Act (re-render the component with missions data)
    // (simulating when the user clicks "Get Data" and api data comes into the component)

    //  rerender(<Episodes episodes={episodes} />);
    //  const episodes = getAllByTestId(/episode/i);

    // Assert (make sure the missions are rendered to the page)
    // 3 missions should render to the page

    // expect(missions).toHaveLength(3);

})
