declare global {
  namespace JSX {
    interface IntrinsicElements {
      "info-tooltip": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default global;
