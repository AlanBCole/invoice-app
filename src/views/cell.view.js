export function cell(tagName, className, valueToDisplay) {
    return tagName({ className }, valueToDisplay);
}