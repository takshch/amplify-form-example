'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface MainViewProps {
  steps: string[],
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
}

const MainView: React.FC<MainViewProps> = ({
  steps,
  currentStep,
  nextStep,
  prevStep,
}) => {
  const formik = useFormik({
    initialValues: {
      repository: '',
      branch: '',
      isMonorepo: false,
    },
    validationSchema: Yup.object({
      repository: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Repository is required'),
      branch: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Branch is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="grow p-8 bg-slate-50">
      <h2 className="text-2xl font-semibold mb-6">Step {currentStep}</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {currentStep === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Repository
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  id="repository"
                  className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                    formik.touched.repository && formik.errors.repository
                      ? 'border-red-500'
                      : ''
                  }`}
                  {...formik.getFieldProps('repository')}
                  placeholder="Select a repository"
                />
                {formik.touched.repository && formik.errors.repository ? (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.repository}
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Branch
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  id="branch"
                  className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                    formik.touched.branch && formik.errors.branch
                      ? 'border-red-500'
                      : ''
                  }`}
                  {...formik.getFieldProps('branch')}
                  placeholder="Select a branch"
                />
                {formik.touched.branch && formik.errors.branch ? (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.branch}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isMonorepo"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                {...formik.getFieldProps('isMonorepo')}
              />
              <label
                htmlFor="isMonorepo"
                className="ml-2 block text-sm text-gray-900"
              >
                My app is a monorepo
              </label>
            </div>
            <div className="flex items-start bg-purple-100 p-4 rounded mt-4">
              <svg
                className="w-6 h-6 text-purple-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 1016 0zM8.293 11.707a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-purple-700">
                If you don't see your repository in the dropdown above, ensure
                the Amplify GitHub App has permissions to the repository. If
                your repository still doesn't appear, push a commit and click
                the refresh button.
              </p>
              <button className="ml-auto bg-purple-500 text-white px-3 py-1 rounded">
                Update GitHub permissions
              </button>
            </div>
          </>
        )}
        <div className="flex justify-end space-x-4 mt-8">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-200 px-4 py-2 rounded text-gray-700"
            >
              Previous
            </button>
          )}
          {currentStep === steps.length ? (
            <button
              type="submit"
              className="bg-indigo-600 px-4 py-2 rounded text-white"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              className="bg-indigo-600 px-4 py-2 rounded text-white"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MainView;
