import React from "react";
import { render, screen } from '@testing-library/react';
import { DeleteModal } from './DeleteModal';

describe("DeleteModal", () => {
  test("DeleteModal has been rendered", () => {
    const deleteModal = render(<DeleteModal></DeleteModal>);
    expect(deleteModal);
  });
});