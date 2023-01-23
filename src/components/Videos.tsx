import React from 'react'
import userIcon from '../../src/assets/images/user-icon.png'

export const Videos: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 overflow-hidden">
      <img
        src="https://i.ytimg.com/vi/hqGtjJO1cy0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAu8Z98M8XAgE-i9ehUrE6YQl3U8w"
        alt=""
      />
      <div className="flex gap-2">
        <img className="w-8 h-8" src={userIcon} alt="" />
        <div className="flex flex-col">
          <span className="font-bold text-sm overflow-hidden ct-title-video">
            CFM-M12S Vip Transformer's | Bá chủ mới thay TMP | Súng vòng tệ dòng
            SMG có xuyên thấu mạnh nhất,nạp
          </span>
          <span className="text-xs">Mạnh Dũng Official</span>
          <div>
            <span className="text-xs text-[#606060]">1.8M views</span>
            <span className="text-xs text-[#606060] before:content-['•'] before:mx-1">
              5 months ago
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
