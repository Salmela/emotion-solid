import { JSX, Component } from 'solid-js';

declare type Interpolations<Props extends object> = Array<(object | ((props: Props & {
    theme: any;
}) => object))>;
declare type StyledOptions = {
    label?: string;
    shouldForwardProp?: (str: string) => boolean;
    target?: string;
};
interface StyledOtherComponent<Props extends object, InnerProps extends object> extends Component<Props & InnerProps & {
    as?: string;
    class?: string;
}> {
}
interface CreateStyledFunction {
    <T extends keyof JSX.IntrinsicElements>(tag: T, options?: StyledOptions): <Props extends object>(...args: Interpolations<Props>) => StyledOtherComponent<Props, JSX.IntrinsicElements[T]>;
    <InnerProps extends object>(tag: Component<InnerProps>, options?: StyledOptions): <Props extends object>(...args: Interpolations<Props>) => StyledOtherComponent<Props, InnerProps>;
}

declare function useTheme(): any;
declare const ThemeProvider: Component<{
    theme: () => any;
}>;

declare const styled: CreateStyledFunction;

export { ThemeProvider, styled, useTheme };
