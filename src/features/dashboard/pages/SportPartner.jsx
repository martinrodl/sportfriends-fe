import React from 'react';
import { Formik, Form } from 'formik';

import { SelectSearchInput, SubmitButton } from 'shared/components';

import PartnerCard from '../components/events/PartnerCard';

export default function SportPartner() {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <Formik
            initialValues={{
              sport: '',
            }}
            onSubmit={(formData) => {
              console.log(formData);
            }}
          >
            <Form>
              <div className="mb-4">
                <SelectSearchInput placeholder="Type of Sport" label="sport" />
              </div>
              <SubmitButton text="Filter" />
            </Form>
          </Formik>
        </div>
        <PartnerCard />
      </div>
    </div>
  );
}
