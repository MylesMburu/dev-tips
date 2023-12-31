'use client'

import React from 'react'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateTip = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        tip: '',
        tag:'',
    });

    const createPrompt = async (e) => {  
      e.preventDefault();
      setSubmitting(true);

      try{
        const response = await fetch ('/api/tips/new',
        {
          method: 'POST',
          
          body: JSON.stringify({
            tip: post.tip,
            userId: session?.user.id,
            tag: post.tag,
          })
        })

        if (response.ok){
          router.push('/');
        }

      }
      catch(error){
          console.log(error)
      }
      finally{
        setSubmitting(false);
      }

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