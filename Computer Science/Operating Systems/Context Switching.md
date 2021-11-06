## Context Switching이란?

- 현재 진행하고 있는 Task(Process, Thread)의 상태를 저장하고 다음 진행할 Task의 상태 값을 읽어 적용하는 과정을 말합니다.
- 이때, 이전의 프로세스 상태를 보관하고, 새로운 프로세스 상태를 적재하는 작업입니다.
- 동작 중인 프로세스가 대기하면서 해당 프로세스의 상태를 PCB에 보관하고, 대기하고 있던 다음 순번의 프로세스가 동작하면서 이전에 보관했던 프로세스 상태를 PCB에서 읽어 레지스터에 복구하는 과정을 말합니다.

## Context Switching이 발생하는 경우

- 보통 인터럽트가 발생하거나, 실행 중인 CPU 사용 허가 시간을 모두 소모하거나, 입출력을 위해 대기해야 하는 경우에 Context Switching이 발생합니다.
  - 즉, Process가 Ready → Running, Running → Waiting처럼 상태 변경 시 발생합니다 🙂

## Context Switching 과정

1. Task(프로세스)의 대부분 정보는 Register에 저장되고 **PCB(Process Control Block)로 관리**된다.
2. 현재 실행하고 있는 Task의 PCB 정보를 저장한다. (Process Stack, Ready Queue)
3. 다음 실행할 Task의 PCB 정보를 읽어 Register에 적재하고 CPU가 이전에 진행했던 과정을 연속적으로 수행할 수 있다.

## Context Switching Cost (Process vs Thread)

- Context Switching은 

  많은 비용이 소모

  됩니다.

  - Cache 초기화
  - Memory Mapping 초기화
  - 커널은 항상 실행된 상태여야 한다.

- 프로세스 Context Switching 비용 > 스레드 Context Switching 비용

  - 쓰레드는 Stack 영역을 제외한 모든 메모리를 공유하므로 Context Switching 수행 시 St**ack 영역만 변경하면 되기 때문에 비용이 적게 든다**.

## Context Switching의 Overhead란?

- Overhead는 과부하라는 뜻으로, 보통 안좋은 말로 사용됩니다.
- 하지만 프로세스 작업 중에는 OverHead를 감수해야 하는 상황이 있습니다.
  - 프로세스를 수행하다가 입출력 이벤트가 발생해서 대기 상태로 전환시킴.
  - 이때, CPU를 그냥 놀게 놔두는 것보다 다른 프로세스를 수행시키는 것이 효율적입니다.
- 즉, CPU에 계속 프로세스를 수행시키도록 하기 위해서 다른 프로세스를 실행시키고 Context Switching을 합니다.
- CPU가 놀지 않도록 만들고, 사용자에게 빠르게 일처리를 제공해주기 위한 것입니다.