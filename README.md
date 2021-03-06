# admin

> A node.js (koa) Chat Program project - backend

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:4000
npm start
```


###※ commit message 작성 형식

**commit 단위**

- 하나의 의도만을 가져야함
- 한번에 여러 파일을 수정하더라도 그게 기능 수정인지, 버그 수정, 개선 수정인지 분명해야 함

**commit시 참고 사항**

- 두 번째 줄은 항상 비워둬야함

**commit시 주의 사항**

- 코드 저장용 커밋은 하지 말 것(급하지 않은 상황에서 개발이 미 완성된 코드 커밋 하는 경우)
- 너무 빈번한 커밋 피할 것(기능을 너무 쪼개어 커밋하는 것 피하기)
- 하나의 커밋 안에 2가지 기능을 수정하는 경우 없도록 관리

**develop branch 작업 구분 분류(기능 단위로 진행)**

- 신규 - 신규 개발 관련 사항
- 개선 - 운영 서비스에 대한 기능 개선
- 오류 - 운영 서비스에 대한 오류 수정
- 이슈 - 예상하지 못한 커밋이 발생한 경우
- 문서 - 문서 파일(템플릿 파일 등)을 커밋하는 경우
- 테스트 - 테스트 관련 파일을 커밋하는 경우

**commit message 작성 방식**

```
[작업 구분] - 제목(작업 사항에 대한 간단한 정리)
한칸 공백
작업 사항에 대한 상세 설명

EX)
[신규] - bm-auth 개발
```
