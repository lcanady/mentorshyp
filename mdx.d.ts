// types/mdx.d.ts
declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element
    // noinspection JSDuplicatedDeclaration
    export default MDXComponent
}
