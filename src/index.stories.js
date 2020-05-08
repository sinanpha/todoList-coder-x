import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'Button' };

import TodoItem from './Components/TodoItem.js';
export default { title: 'TodoItem' };



export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
    <Button>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
    </span>
    </Button>
);

export const withTodoItem = () => <TodoItem  />;
