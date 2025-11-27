function StateVsProps() {
  return (
    <div>
      <h2>State vs Props</h2>
      <ul>
        <li>State is managed inside a component, while props are passed from parent to child.</li>
        <li>State can be changed, but props are read-only.</li>
        <li>State is used for interactive behavior; props are used to pass data.</li>
      </ul>
    </div>
  );
}

export default StateVsProps;