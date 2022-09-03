interface Customer {
  address: {
    state: string;
  };
}

export function IsInNewEngland(state: string) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
