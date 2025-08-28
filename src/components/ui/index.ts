/**
 * UI Components Barrel Export
 *
 * TypeScript Learning: This pattern is called a "barrel export"
 * It allows us to import multiple components from one place:
 * import { Button, Card } from '@/components/ui';
 *
 * Instead of:
 * import Button from '@/components/ui/Button';
 * import Card from '@/components/ui/Card';
 */

export { default as Button } from './Button';
export { default as Card } from './Card';
