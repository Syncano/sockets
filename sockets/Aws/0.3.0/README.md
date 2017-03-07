# Aws Syncano Socket

It is Aws integration with Syncano. It allows you to sdk for working with the aws api's

## Endpoints

### ecs-register-task-definition

#### Parameters:

      accessKeyId: 'akid',
      secretAccessKey: 'secret',
      region: 'us-west-2',
      apiVersion: '2014-11-13',
      family: 'aFamily',
      containerDefinitions: 'JSON encoded containerDefinitions',
      volumes: [object Object]


### ecs-list-task-definitions

#### Parameters:

      accessKeyId: 'akid',
      secretAccessKey: 'secret',
      region: 'us-west-2',
      apiVersion: '2014-11-13',
      familyPrefix: 'aFamily',
      nextToken: 'aTokenValue',
      maxResults: 100


### ecs-run-task

#### Parameters:

      accessKeyId: 'akid',
      secretAccessKey: 'secret',
      region: 'us-west-2',
      apiVersion: '2014-11-13',
      taskDefinition: 'arn:aws:ecs:us-west-2:577431834720:task-definition/taskName:1',
      cluster: 'myCluster',
      count: 1


### ecs-list-tasks

#### Parameters:

      accessKeyId: 'akid',
      secretAccessKey: 'secret',
      region: 'us-west-2',
      apiVersion: '2014-11-13',
      cluster: 'default',
      family: 'aFamily',
      nextToken: 'aTokenValue',
      maxResults: 100


### ecs-stop-task

#### Parameters:

      accessKeyId: 'akid',
      secretAccessKey: 'secret',
      region: 'us-west-2',
      apiVersion: '2014-11-13',
      task: 'arn:aws:ecs:us-west-2:575231334330:task-definition/taskName:1',
      cluster: 'default'


### ec2-describe-instances

#### Parameters:

      accessKeyId: 'akid',
      secretAccessKey: 'secret',
      region: 'us-west-2',
      apiVersion: '2014-11-13',
      instanceIds: STRING,
      nextToken: 'aTokenValue',
      maxResults: 100


### ecs-describe-container-instances

#### Parameters:

      accessKeyId: 'akid',
      secretAccessKey: 'secret',
      region: 'us-west-2',
      apiVersion: '2014-11-13',
      cluster: 'default',
      containerInstances: 98950f3c-7347-4249-99cb-168832a1b8f2


### ecs-describe-tasks

#### Parameters:

      accessKeyId: 'akid',
      secretAccessKey: 'secret',
      region: 'us-west-2',
      apiVersion: '2014-11-13',
      cluster: 'default',
      tasks: 98950f3c-7347-4249-99cb-168832a1b8f2


### ecs-describe-task-definition

#### Parameters:

      accessKeyId: 'akid',
      secretAccessKey: 'secret',
      region: 'us-west-2',
      apiVersion: '2014-11-13',
      taskDefinition: 'arn:aws:ecs:us-west-2:595131534720:task-definition/my-cool-task'

