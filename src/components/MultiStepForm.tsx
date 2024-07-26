'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainView from './MainView';

const STEPS = [
  'App Details',
  'Repository Configuration',
  'Built Settings',
  'Review & Submit',
];

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar steps={STEPS} currentStep={currentStep} />
        <MainView steps={STEPS} currentStep={currentStep} nextStep={handleNextStep} prevStep={handlePreviousStep} />
      </div>
    </div>
  );
};

export default MultiStepForm;
