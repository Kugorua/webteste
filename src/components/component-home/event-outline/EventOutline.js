import React from 'react';
import './event-outline.scss';
export default function EventOutline() {
  return (
    <div className="event-outline grid-full">
      <div className="event-outline__wrap grid">
        <h2>EVENT OUTLINE</h2>
        <div className="borders"></div>
        <p>
          かつてなく移動が制限される経験をした2020年。これからの「移動」はどうなるのか。自動車メーカー、鉄道、不動産、小売りなど、これまでの業種、業界の垣根を越えて、新しいモビリティビジネスのチャンスがどこにあるのか、どのように育てていくのかを、産学それぞれの立場から議論する。
        </p>
        <table>
          <tbody>
            <tr>
              <th>時期</th>
              <td>7月下旬</td>
              <th>時間</th>
              <td>平日の夜　19時～　2時間程度</td>
            </tr>
            <tr>
              <th>形式</th>
              <td>オンラインイベント TOKYO JCT から配信</td>
              <th>定員</th>
              <td>150人程度</td>
            </tr>
            <tr>
              <th>テーマ</th>
              <td colSpan="3">モビリティビジネスはどこで生まれるのか、モビリティアントレプレナーシップ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
