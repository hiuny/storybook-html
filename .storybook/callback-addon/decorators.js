// 참조: https://dev.to/joelstransky/render-callbacks-in-storybook-5c0c
import { STORY_RENDERED } from '@storybook/core-events';
import addons from "@storybook/addons";

export const withRenderCallback = (selector, callback) => {
  return (Story, context) => {
    addons.getChannel().once(STORY_RENDERED, (e) => {
      callback(document.querySelector(selector), context);
    });
    return Story();
  };
};