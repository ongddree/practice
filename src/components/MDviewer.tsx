import { useRecoilValue } from 'recoil';
import { postState } from '../recoil/atoms/post';

const MDviewer = () => {
  const post = useRecoilValue(postState);
  return (
    <div>
      <h3>마크다운 뷰어</h3>
      <div dangerouslySetInnerHTML={{ __html: post }} />
      <button>파일 내보내기</button>
    </div>
  );
};

export default MDviewer;
