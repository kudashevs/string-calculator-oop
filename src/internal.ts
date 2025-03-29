/*
 * This file is necessary because it solves the circular dependency issue.
 * @see https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de
 */
export * from './SmartStrings/SmartString';
export * from './SmartStrings/EmptyString';
export * from './SmartStrings/DefaultDelimiterString';
export * from './SmartStrings/CustomDelimiterString';
