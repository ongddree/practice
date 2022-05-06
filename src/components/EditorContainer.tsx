import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';

const EditorContainer = () => {
  const [post, setPost] = useState('');

  return (
    <div>
      <Editor
        initialValue={''}
        apiKey="u7dq1ei6qlny6tyhkebbwzr1su1sb4n2e3zzg0v4tfvfne4s"
        init={{
          bordercolor: 'blue',
          height: 500,
          menubar: false,
          statusbar: false,
          skin: 'snow',
          toolbar_sticky: true,
          plugins: [
            'advlist autolink lists link',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste',
          ],
          toolbar: 'styleselect | bold | italic | underline | forecolor',
          style_formats: [
            { title: '본문', block: 'p' },
            { title: '소제목', block: 'h3', classes: 'ritualSubTitle' },
            {
              title: '하이라이트',
              inline: 'span',
              classes: 'ritualHighlight',
            },
          ],
        }}
        onEditorChange={setPost}
      />
      <p>*뷰어 미리보기*</p>
      <div dangerouslySetInnerHTML={{ __html: post }} />
      <p>*마크다운 미리보기*</p>
      <div>{post}</div>
    </div>
  );
};

export default EditorContainer;
