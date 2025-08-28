/**
 * Button Component Stories for Storybook
 *
 * TypeScript Learning:
 * - This file demonstrates how to create stories for component documentation
 * - Meta type defines the configuration for the component
 * - StoryObj type creates individual story instances
 * - args property provides props to the component
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/components/ui';

// Meta configuration for the Button component
const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible button component that can render as a button or link with multiple variants and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in a loading state',
    },
    children: {
      control: { type: 'text' },
      description: 'The content inside the button',
    },
    href: {
      control: { type: 'text' },
      description: 'If provided, renders as a link',
    },
    external: {
      control: { type: 'boolean' },
      description: 'Whether the link is external (opens in new tab)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Primary variant
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

// Outline variant
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

// Ghost variant
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

// Small size
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

// Large size
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// Loading state
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...',
  },
};

// As link
export const AsLink: Story = {
  args: {
    href: '/projects',
    children: 'View Projects',
  },
};

// External link
export const ExternalLink: Story = {
  args: {
    href: 'https://github.com',
    external: true,
    children: 'GitHub',
  },
};

// All sizes demonstration
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// All variants demonstration
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};
