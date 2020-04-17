export = tag;

type Children = HTMLElement[] | string;
type Options = {};

declare function tag(name: string, props?: Options | Children, children?: Children): HTMLElement;
