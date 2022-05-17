// cypress > integration > 생성폴더 > 생성파일명.spec.js

describe("메인 테스트", () => {
  // 대주제
  it("yarn start", () => {
    // 테스트 설명하는 제목
    cy.exec("yarn start"); // CLI로 실행되는 함수 (cli > yarn start를 실행)
  });
  it("1. 메인화면 접속", () => {
    cy.visit("/"); // BaseURL경로를 접속하게 된다.
  });
  it("2. 지역 기반 검색 클릭", () => {
    cy.contains("지역 기반").click(); // "지역 기반"이라는 텍스트가 포함된 엘리먼트를 찾아서 클릭한다.
  });
  it("2. 지역 기반 검색 클릭 해제", () => {
    cy.contains("지역 기반").click(); // "지역 기반"라는 텍스트가 포함된 엘리먼트를 찾아서 클릭한다.
  });
  it("3. 동네 입력", () => {
    cy.get("input[type='text']").type("신림"); // type 속성 값이 text인 input 태그에 "신림"이라고 입력한다.
  });
  it("4. 검색하기", () => {
    cy.get("button").contains("검색하기").click();
  });
  /* ... */
});
