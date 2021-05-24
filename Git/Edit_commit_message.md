# 커밋을 변경/수정하는 방법

- git에 작업된 내용을 저장소에 업데이트하기 위한 과정 중 하나로, 커밋(commit)을 수행한다. 이는 리모트 저장소에 올리기 위한 push 이전의 작업으로 커밋을 할 때 보통 진행한 작업 내용에 대한 간단한 메시지 형태로 함께 작성하게 된다.

<br>

- 그러나 commit 메시지를 잘못 작성했거나 수정해야하는 경우, 즉 이미 커밋한 메시지를 다시 수정해야 하는 경우가 있다.

<br>

## Commit 메시지의 중요성

- 커밋을 하는 경우에는 간단하게 내가 변경한 내용, 추가한 내용을 같이 입력하게 된다. 보통 수정된 내용을 간략하게 요약하며 한 줄에서 두세줄 씩 입력하는 경우도 있다.
- 이렇게 작성한 commit 메시지는 후에 예상치 못한 이슈가 발생하거나 이슈를 트래킹할 때 **<u>history를 다시 확인하게 되는 경우</u>**가 있기 때문에 매우 중요하다.
- History의 내가 작성한 commit 메시지들을 보며 내가 무슨 작업을 했구나라고 알 수 있지만, 만약 commit 메시지를 전혀 다른 내용으로 실수로 작성하거나 잘못 쓴 경우, 이 메시지를 **수정할 필요**가 있다. 또한, 이미 커밋한 프로젝트 이외에도 다른 내용도 같이  commit해야 되는 경우도 있다.

<br>

## Commit 수정하기

<br>

### 마지막 커밋 메시지 바꾸기

- `git commit --amend` 을 이용하여 마지막 커밋 메시지를 바꿀 수 있다.

- ```bash
  $ git commit --amend
  ```

  - 위의 명령어를 실행하면 자동으로 텍스트 편집기를 실행하고 마지막 커밋을 불러온다.
  - 그 상태에서 commit 메시지를 수정하면 된다.



### 마지막 커밋에 수정한 프로젝트 내용 추가하기

- ```bash
  $ git add [파일이름]
  $ git commit --amend
  ```

- 파일을 수정하고, `git add` 명령으로 Staging Area에 넣는다.
- 그리고,  `git commit --amend` 명령으로 커밋을 하면 커밋 자체가 수정되면서 추가로 수정사항을 밀어넣을 수 있다.



**⚠︎ 주의할 점: 이미 Push 한 커밋은 수정할 수 없다.**



### 커밋을 고치는 내용이 사소한 경우 (예. 오타)

- ```bash
  $ git commit --amend --no-edit
  ```

- 오타를 살짝 고치거나 사소한 단어를 빠뜨린 경우, 위의 명령어를 실행한다.

- 위 명령어의 경우 편집기가 실행되지 않고, 바로 커밋 메시지를 수정할 수 있다.



### 커밋 메시지를 여러개 수정하기

- 가장 최근 커밋이 아닌 그 이전의 커밋을 수정하기 위해서는 다른 도구가 필요합니다. 

- 이 때는 `rebase` 명령어를 이용하여 수정합니다.

- ```bash
  $ git rebase -i
  ```

  - -i라는 옵션을 추가하면 대화형 모드로 Rebase할 수 있다.
  - 어떤 시점부터 rebase할 것인지 인자로 넘기면 된다.

- 예시: 마지막 커밋 메시지 세 걔를 모두 수정한다

  - ```bash
    $ git rebase -i HEAD-3
    ```

  - 위 명령은 HEAD~3 ...HEAD 범위에 있는 모든 커밋을 수정한다.

  - ⚠︎**다만, 이미 중앙서버에 push한 커밋은 절대 고치지 말아야 한다**.

- `rebase` 명령어를 실행하면, Git은 수정하려는 커밋 목록이 첨부된 스크립트를 텍스트 편집기로 열어준다.

  - ```bash
    pick f7f3f6d Update name
    pick 310154e Update README.md
    pick a5f4a0d Add input.txt
    
    # Rebase 710f0f8..a5f4a0d onto 710f0f8
    #
    # Commands:
    #  p, pick = use commit
    #  r, reword = use commit, but edit the commit message
    #  e, edit = use commit, but stop for amending
    #  s, squash = use commit, but meld into previous commit
    #  f, fixup = like "squash", but discard this commit's log message
    #  x, exec = run command (the rest of the line) using shell
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    # Note that empty commits are commented out
    ```

  - 이때, **<u>제일 위에 있는 커밋</u>**은 **<u>가장 오래된 커밋</u>**이다.

- `pick`이라는 단어를 `edit`로 수정하면 그 커밋에서 멈춘다.

  - ```
    edit f7f3f6d Update name
    pick 310154e Update README.md
    pick a5f4a0d Add input.txt
    ```

- 위 내용을 저장하고 편집기를 종료하면, Git은 목록에 있는 커밋 중에 가장 오래된 커밋으로 이동하고, 아래와 같은 메시지를 보여주고, 명령 프롬프트를 보여준다.

  - ```bash
    $ git rebase -i HEAD~3
    Stopped at f7f3f6d... Update name
    You can amend the commit now, with
    
           git commit --amend
    
    Once you’re satisfied with your changes, run
    
           git rebase --continue
    ```

- `git commit --amend` 로 커밋 메시지를 수정하고, 텍스트 편집기를 종료한다.

- 그 이후 더 수정할 것이 있다면, `git rebase --continue` 를 이용해 나머지 2개의 커밋에 적용할 수 있다.







