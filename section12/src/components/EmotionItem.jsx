import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : " "
      }`}
    >
      {/* Editor.jsx <EmotionItem emotionId={1} emotionName={"완전 좋음"} /> */}
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
