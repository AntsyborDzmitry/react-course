import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FunctionalComponent from '../src/components/functionalComponentWithTextControl';
import SimpleComponent from '../src/components/simpleComponentWithTextControl';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Testing of the components with text control", () => {
  it("functionalComponentWithTextControl should changes the color and hide/show message when clicked", () => {
    let functionalTestMessage = "Test message for functional";
    let functionalComponent = <FunctionalComponent text={functionalTestMessage}/>;
    executeTest (functionalComponent, functionalTestMessage, ["white","blue"]);
  });

  it("simpleComponentWithTextControl should changes the color and hide/show message when clicked", () => {
    let simpleTestMessage = "Test message for simple";
    let simpleComponent = <SimpleComponent text={simpleTestMessage}/>;
    executeTest (simpleComponent, simpleTestMessage, ['red','yellow']);
  });
});

function executeTest (componentWithTextControl, testMessage, colorOrder)  {
  act(() => {
    render(componentWithTextControl, container);
  });

  const button = document.querySelector('div.' + colorOrder[0] + ' button');

  expect(button.textContent).toEqual("show");
  expect(document.querySelector('div.' + colorOrder[0] + ' span').textContent).toEqual("");

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(button.textContent).toEqual("hide");
  expect(document.querySelector('div.' + colorOrder[0] + ' span').textContent).toEqual(testMessage);

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(button.textContent).toEqual("show");
  expect(document.querySelector('div.' + colorOrder[1] + ' span').textContent).toEqual("");
}