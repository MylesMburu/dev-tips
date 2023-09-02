'use client'

import React from 'react'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateTip = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        tip: '',
        tag:'',
    });

    const createPrompt = async (e) => {  

    };
  return (
    <Form 
    type= "Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPrompt}
    />
  )
}

export default CreateTip;