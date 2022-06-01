~~1. 관리자 페이지 (업로드 페이지) 제작~~

~~- 입력 값 정리 (이름, 프로필 사진, 나이, 성별, 간단한 자기소개, 인터뷰 내용, 고화질 졸업작품 사진, 외국어, 스킬(텍스트로 받아서 스킬 로고로 변환), 이메일, 자격증, 포트폴리오 등)~~
~~- 관리자 페이지 로그인 기능 구현~~
~~- 관리자 페이지는 크게 2 페이지로 제작. (Upload, Guest 방명록 관리)~~

2. DB 테이블 설계

- 관리자 페이지에 업로드된 데이터들이 게스트 페이지에 보여지게 제작.
- 기본 정보 테이블 컬럼명 디자인 친구들한테 전달받기
- 방명록 백업 테이블 Create.
- 방명록 테이블 Create.

3. 게스트 페이지 제작

- 크게 3페이지로 제작. (HOME, Profile, Guest)
- 왼쪽 상단 'BLOCK'로고 클릭하면 HOME으로 되돌아가기.
- Guest 페이지에 남길 댓글 데이터를 저장할 테이블 생성.
- Guest 페이지에 CRUD 적용.
- 사용자가 누군지 모르는 상태에서 Guest 페이지에 방명록을 작성하기 때문에 A라는 사용자가 첫 방명록을 남길 때 비밀번호 숫자 4개를 입력받도록 하고 이후 글을 지우거나 수정하고 싶을 때 비밀번호 숫자 4개가 일치하면 수정 삭제 가능하도록 제작. (보통 삭제는 하지 않고 방명록에서 보이지 않도록 다른 DB 테이블로 옮김. 법적 문제로 인해 그렇게 하도록 되어있음.)
- 비밀번호를 방명록 작성자가 잊어버렸을 경우를 대비해 관리자 페이지에서 방명록 댓글을 가릴 수 있도록 제작.
- 방명록을 수정할 경우 이전에 작성했던 글은 방명록에서 보이지 않도록 다른 DB 테이블로 옮김. 이것 또한 법적인 문제로 인해 남겨두도록 되어있음.